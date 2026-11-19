import path from "path";
import { prisma } from "../config/prisma.js";
import { parseSpreadsheet, validateRows } from "../utils/excelParser.js";

/**
 * POST /api/import/preview
 * Parse uploaded file, validate rows, return first 10 records without inserting into DB
 */
export async function previewImport(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded. Please upload an Excel (.xlsx, .xls) or CSV (.csv) file."
      });
    }

    const { headers, rows } = parseSpreadsheet(req.file.buffer);

    if (rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "The uploaded file contains no data rows."
      });
    }

    // Collect all DLT IDs from the uploaded file
    const fileDltIds = rows
      .map(r => r.data.dltTemplateId)
      .filter(Boolean);

    // Query database for already existing DLT IDs
    const existingTemplates = await prisma.template.findMany({
      where: { dltTemplateId: { in: fileDltIds } },
      select: { dltTemplateId: true }
    });

    const existingDltSet = new Set(existingTemplates.map(t => t.dltTemplateId));

    // Validate all rows
    const validatedRows = validateRows(rows, existingDltSet);

    const validCount = validatedRows.filter(r => r.isValid).length;
    const invalidCount = validatedRows.filter(r => !r.isValid).length;
    const duplicateCount = validatedRows.filter(r => r.isDuplicate).length;

    // First 10 preview records
    const previewRecords = validatedRows.slice(0, 10);

    return res.status(200).json({
      success: true,
      data: {
        fileName: req.file.originalname,
        fileType: path.extname(req.file.originalname).toLowerCase(),
        totalRows: validatedRows.length,
        validCount,
        invalidCount,
        duplicateCount,
        detectedColumns: headers,
        previewRecords
      }
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/import/confirm
 * Import validated records into database, skip duplicates, track batch history
 */
export async function confirmImport(req, res, next) {
  try {
    let rowsToProcess = [];
    let fileName = "bulk_upload.xlsx";
    let fileType = ".xlsx";

    // Scenario A: File is re-uploaded via multipart
    if (req.file) {
      fileName = req.file.originalname;
      fileType = path.extname(req.file.originalname).toLowerCase();
      const parsed = parseSpreadsheet(req.file.buffer);
      rowsToProcess = parsed.rows;
    } else if (req.body.records && Array.isArray(req.body.records)) {
      // Scenario B: Records array passed from confirmed client preview
      fileName = req.body.fileName || fileName;
      fileType = req.body.fileType || fileType;
      rowsToProcess = req.body.records.map((item, idx) => ({
        rowNumber: item.rowNumber || idx + 2,
        data: item.data || item
      }));
    } else {
      return res.status(400).json({
        success: false,
        message: "No import data provided. Please upload a file or provide records."
      });
    }

    if (rowsToProcess.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No records found to import."
      });
    }

    // 1. Create ImportBatch in database with PENDING/PROCESSING status
    const batch = await prisma.importBatch.create({
      data: {
        fileName,
        fileType,
        status: "PROCESSING",
        totalRecords: rowsToProcess.length,
        importedById: req.user.id,
        startedAt: new Date()
      }
    });

    // 2. Collect all DLT IDs to revalidate against DB (prevents race conditions)
    const dltIds = rowsToProcess
      .map(r => r.data.dltTemplateId)
      .filter(Boolean);

    const existingTemplates = await prisma.template.findMany({
      where: { dltTemplateId: { in: dltIds } },
      select: { dltTemplateId: true }
    });

    const existingDltSet = new Set(existingTemplates.map(t => t.dltTemplateId));

    // 3. Re-validate rows
    const validatedRows = validateRows(rowsToProcess, existingDltSet);

    const validRows = [];
    const errorReport = [];
    let skippedCount = 0;
    let failedCount = 0;

    for (const item of validatedRows) {
      if (item.isDuplicate) {
        skippedCount++;
        errorReport.push({
          row: item.rowNumber,
          dltTemplateId: item.data.dltTemplateId || "N/A",
          name: item.data.name || "N/A",
          status: "SKIPPED",
          reason: item.errors.join("; ")
        });
      } else if (!item.isValid) {
        failedCount++;
        errorReport.push({
          row: item.rowNumber,
          dltTemplateId: item.data.dltTemplateId || "N/A",
          name: item.data.name || "N/A",
          status: "FAILED",
          reason: item.errors.join("; ")
        });
      } else {
        validRows.push(item);
      }
    }

    // 4. Insert valid records in a transaction
    let successfulCount = 0;

    if (validRows.length > 0) {
      // Prepare batch create
      const templatesToInsert = validRows.map(r => ({
        dltTemplateId: r.data.dltTemplateId,
        name: r.data.name,
        dueDate: r.data.dueDate,
        content: r.data.content, // Exactly preserved (Hindi, placeholders, punctuation)
        ownerName: r.data.ownerName,
        remarks: r.data.remarks || null,
        attachmentLink1: r.data.attachmentLink1 || null,
        attachmentLink2: r.data.attachmentLink2 || null,
        isActive: true,
        importBatchId: batch.id,
        createdById: req.user.id,
        updatedById: req.user.id
      }));

      // Insert templates in chunks of 50 to avoid parameter limits on PostgreSQL
      const CHUNK_SIZE = 50;
      for (let i = 0; i < templatesToInsert.length; i += CHUNK_SIZE) {
        const chunk = templatesToInsert.slice(i, i + CHUNK_SIZE);
        await prisma.template.createMany({
          data: chunk,
          skipDuplicates: true
        });
      }

      successfulCount = validRows.length;
    }

    // 5. Determine final batch status
    let finalStatus = "COMPLETED";
    if (successfulCount === 0 && (failedCount > 0 || skippedCount > 0)) {
      finalStatus = "FAILED";
    } else if (failedCount > 0 || skippedCount > 0) {
      finalStatus = "PARTIALLY_COMPLETED";
    }

    // 6. Update ImportBatch record
    const updatedBatch = await prisma.importBatch.update({
      where: { id: batch.id },
      data: {
        status: finalStatus,
        totalRecords: rowsToProcess.length,
        successfulCount,
        skippedCount,
        failedCount,
        errorReport: errorReport.length > 0 ? errorReport : null,
        completedAt: new Date()
      },
      include: {
        importedBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(200).json({
      success: true,
      message: `Import processed: ${successfulCount} imported, ${skippedCount} skipped, ${failedCount} failed.`,
      data: updatedBatch
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/import/history
 * Get paginated list of import batches
 */
export async function getImportHistory(req, res, next) {
  try {
    const { page = 1, limit = 10 } = req.query;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 10));
    const skip = (pageNum - 1) * limitNum;

    const [totalRecords, batches] = await Promise.all([
      prisma.importBatch.count(),
      prisma.importBatch.findMany({
        skip,
        take: limitNum,
        orderBy: { createdAt: "desc" },
        include: {
          importedBy: {
            select: { id: true, name: true, employeeId: true }
          },
          _count: {
            select: { templates: true }
          }
        }
      })
    ]);

    const totalPages = Math.ceil(totalRecords / limitNum);

    return res.status(200).json({
      success: true,
      data: batches,
      pagination: {
        totalRecords,
        totalPages,
        currentPage: pageNum,
        limit: limitNum,
        hasNextPage: pageNum < totalPages,
        hasPrevPage: pageNum > 1
      }
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/import/:id
 * Get single import batch with its error report and details
 */
export async function getImportById(req, res, next) {
  try {
    const { id } = req.params;

    const batch = await prisma.importBatch.findUnique({
      where: { id },
      include: {
        importedBy: {
          select: { id: true, name: true, employeeId: true, email: true }
        },
        _count: {
          select: { templates: true }
        }
      }
    });

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Import batch record not found."
      });
    }

    return res.status(200).json({
      success: true,
      data: batch
    });
  } catch (error) {
    next(error);
  }
}
