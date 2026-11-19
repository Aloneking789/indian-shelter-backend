import { prisma } from "../config/prisma.js";

/**
 * Validate URL helper
 */
function isValidUrl(urlString) {
  if (!urlString || typeof urlString !== "string") return true;
  const trimmed = urlString.trim();
  if (!trimmed) return true;
  try {
    const url = new URL(trimmed);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * POST /api/templates
 * Create a new SMS template
 */
export async function createTemplate(req, res, next) {
  try {
    const {
      dltTemplateId,
      name,
      dueDate,
      content,
      ownerName,
      remarks,
      attachmentLink1,
      attachmentLink2,
      isActive
    } = req.body;

    // Validate required fields
    if (!dltTemplateId || typeof dltTemplateId !== "string" || !dltTemplateId.trim()) {
      return res.status(400).json({
        success: false,
        message: "DLT Template ID is required."
      });
    }

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Template Name is required."
      });
    }

    if (!dueDate || typeof dueDate !== "string" || !dueDate.trim()) {
      return res.status(400).json({
        success: false,
        message: "Due Date / Frequency is required (e.g. Daily, Weekly, Monthly, Adhoc)."
      });
    }

    if (!content || typeof content !== "string" || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: "SMS Content is required."
      });
    }

    if (!ownerName || typeof ownerName !== "string" || !ownerName.trim()) {
      return res.status(400).json({
        success: false,
        message: "Owner Name is required."
      });
    }

    // Validate attachment URLs if provided
    if (attachmentLink1 && !isValidUrl(attachmentLink1)) {
      return res.status(400).json({
        success: false,
        message: "Attachment Link 1 must be a valid URL starting with http:// or https://"
      });
    }

    if (attachmentLink2 && !isValidUrl(attachmentLink2)) {
      return res.status(400).json({
        success: false,
        message: "Attachment Link 2 must be a valid URL starting with http:// or https://"
      });
    }

    const trimmedDltId = dltTemplateId.trim();

    // Check duplicate DLT Template ID
    const existing = await prisma.template.findUnique({
      where: { dltTemplateId: trimmedDltId }
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: `Template with DLT Template ID '${trimmedDltId}' already exists.`
      });
    }

    const template = await prisma.template.create({
      data: {
        dltTemplateId: trimmedDltId,
        name: name.trim(),
        dueDate: dueDate.trim(),
        content: content.trim(),
        ownerName: ownerName.trim(),
        remarks: remarks ? String(remarks).trim() : null,
        attachmentLink1: attachmentLink1 ? String(attachmentLink1).trim() : null,
        attachmentLink2: attachmentLink2 ? String(attachmentLink2).trim() : null,
        isActive: typeof isActive === "boolean" ? isActive : true,
        createdById: req.user.id,
        updatedById: req.user.id
      },
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        },
        updatedBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(201).json({
      success: true,
      message: "Template created successfully.",
      data: template
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/templates
 * Advanced Search, Filtering, Sorting & Pagination
 */
export async function getTemplates(req, res, next) {
  try {
    const {
      search,
      dltTemplateId,
      name,
      dueDate,
      ownerName,
      content,
      remarks,
      isActive,
      hasAttachment,
      createdFrom,
      createdTo,
      updatedFrom,
      updatedTo,
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      sortOrder = "desc"
    } = req.query;

    const where = {};

    // 1. Global Search across: DLT Template ID, Name, Content, Owner Name, Remarks
    if (search && typeof search === "string" && search.trim()) {
      const searchTerm = search.trim();
      where.OR = [
        { dltTemplateId: { contains: searchTerm, mode: "insensitive" } },
        { name: { contains: searchTerm, mode: "insensitive" } },
        { content: { contains: searchTerm, mode: "insensitive" } },
        { ownerName: { contains: searchTerm, mode: "insensitive" } },
        { remarks: { contains: searchTerm, mode: "insensitive" } }
      ];
    }

    // 2. Specific Field Filters (Case-insensitive partial matching)
    if (dltTemplateId && typeof dltTemplateId === "string" && dltTemplateId.trim()) {
      where.dltTemplateId = { contains: dltTemplateId.trim(), mode: "insensitive" };
    }

    if (name && typeof name === "string" && name.trim()) {
      where.name = { contains: name.trim(), mode: "insensitive" };
    }

    // Note: Due Date is frequency (Daily, Weekly, Monthly, Adhoc, etc.)
    if (dueDate && typeof dueDate === "string" && dueDate.trim()) {
      where.dueDate = { contains: dueDate.trim(), mode: "insensitive" };
    }

    if (ownerName && typeof ownerName === "string" && ownerName.trim()) {
      where.ownerName = { contains: ownerName.trim(), mode: "insensitive" };
    }

    if (content && typeof content === "string" && content.trim()) {
      where.content = { contains: content.trim(), mode: "insensitive" };
    }

    if (remarks && typeof remarks === "string" && remarks.trim()) {
      where.remarks = { contains: remarks.trim(), mode: "insensitive" };
    }

    // 3. isActive Filter
    if (isActive !== undefined && isActive !== "") {
      const activeBool = isActive === "true" || isActive === true;
      where.isActive = activeBool;
    }

    // 4. hasAttachment Filter
    if (hasAttachment !== undefined && hasAttachment !== "") {
      const hasAttachBool = hasAttachment === "true" || hasAttachment === true;
      if (hasAttachBool) {
        where.AND = where.AND || [];
        where.AND.push({
          OR: [
            { AND: [{ attachmentLink1: { not: null } }, { attachmentLink1: { not: "" } }] },
            { AND: [{ attachmentLink2: { not: null } }, { attachmentLink2: { not: "" } }] }
          ]
        });
      } else {
        where.AND = where.AND || [];
        where.AND.push({
          AND: [
            { OR: [{ attachmentLink1: null }, { attachmentLink1: "" }] },
            { OR: [{ attachmentLink2: null }, { attachmentLink2: "" }] }
          ]
        });
      }
    }

    // 5. Date Range Filters (createdAt)
    if (createdFrom || createdTo) {
      where.createdAt = {};
      if (createdFrom) {
        const fromDate = new Date(createdFrom);
        if (!isNaN(fromDate.getTime())) {
          where.createdAt.gte = fromDate;
        }
      }
      if (createdTo) {
        const toDate = new Date(createdTo);
        if (!isNaN(toDate.getTime())) {
          // If date string only has YYYY-MM-DD, set to end of day
          if (typeof createdTo === "string" && createdTo.length === 10) {
            toDate.setHours(23, 59, 59, 999);
          }
          where.createdAt.lte = toDate;
        }
      }
    }

    // 6. Date Range Filters (updatedAt)
    if (updatedFrom || updatedTo) {
      where.updatedAt = {};
      if (updatedFrom) {
        const fromDate = new Date(updatedFrom);
        if (!isNaN(fromDate.getTime())) {
          where.updatedAt.gte = fromDate;
        }
      }
      if (updatedTo) {
        const toDate = new Date(updatedTo);
        if (!isNaN(toDate.getTime())) {
          if (typeof updatedTo === "string" && updatedTo.length === 10) {
            toDate.setHours(23, 59, 59, 999);
          }
          where.updatedAt.lte = toDate;
        }
      }
    }

    // 7. Pagination
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 10));
    const skip = (pageNum - 1) * limitNum;

    // 8. Sorting
    const allowedSortFields = ["dltTemplateId", "name", "dueDate", "ownerName", "createdAt", "updatedAt", "isActive"];
    const validSortBy = allowedSortFields.includes(sortBy) ? sortBy : "createdAt";
    const validSortOrder = sortOrder.toLowerCase() === "asc" ? "asc" : "desc";

    const [totalRecords, templates] = await Promise.all([
      prisma.template.count({ where }),
      prisma.template.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: {
          [validSortBy]: validSortOrder
        },
        include: {
          createdBy: {
            select: { id: true, name: true, employeeId: true }
          },
          updatedBy: {
            select: { id: true, name: true, employeeId: true }
          },
          importBatch: {
            select: { id: true, fileName: true, createdAt: true }
          }
        }
      })
    ]);

    const totalPages = Math.ceil(totalRecords / limitNum);

    return res.status(200).json({
      success: true,
      data: templates,
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
 * GET /api/templates/owners
 * Return list of distinct owner names
 */
export async function getOwners(req, res, next) {
  try {
    const records = await prisma.template.findMany({
      select: { ownerName: true },
      distinct: ["ownerName"],
      orderBy: { ownerName: "asc" }
    });

    const owners = records
      .map(r => r.ownerName)
      .filter(Boolean);

    return res.status(200).json({
      success: true,
      data: owners
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/templates/frequencies
 * Return list of distinct frequency (dueDate) values
 */
export async function getFrequencies(req, res, next) {
  try {
    const records = await prisma.template.findMany({
      select: { dueDate: true },
      distinct: ["dueDate"],
      orderBy: { dueDate: "asc" }
    });

    const frequencies = records
      .map(r => r.dueDate)
      .filter(Boolean);

    return res.status(200).json({
      success: true,
      data: frequencies
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/templates/:id
 * Get single template by ID
 */
export async function getTemplateById(req, res, next) {
  try {
    const { id } = req.params;

    const template = await prisma.template.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true, email: true }
        },
        updatedBy: {
          select: { id: true, name: true, employeeId: true, email: true }
        },
        importBatch: {
          select: { id: true, fileName: true, createdAt: true, status: true }
        }
      }
    });

    if (!template) {
      return res.status(404).json({
        success: false,
        message: "Template not found."
      });
    }

    return res.status(200).json({
      success: true,
      data: template
    });
  } catch (error) {
    next(error);
  }
}

/**
 * PATCH /api/templates/:id
 * Update template details
 */
export async function updateTemplate(req, res, next) {
  try {
    const { id } = req.params;
    const {
      dltTemplateId,
      name,
      dueDate,
      content,
      ownerName,
      remarks,
      attachmentLink1,
      attachmentLink2,
      isActive
    } = req.body;

    const existing = await prisma.template.findUnique({
      where: { id }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Template not found."
      });
    }

    const updateData = {
      updatedById: req.user.id
    };

    // If updating DLT Template ID, check uniqueness
    if (dltTemplateId !== undefined) {
      if (!dltTemplateId || typeof dltTemplateId !== "string" || !dltTemplateId.trim()) {
        return res.status(400).json({
          success: false,
          message: "DLT Template ID cannot be empty."
        });
      }
      const trimmedDlt = dltTemplateId.trim();
      if (trimmedDlt !== existing.dltTemplateId) {
        const conflict = await prisma.template.findUnique({
          where: { dltTemplateId: trimmedDlt }
        });
        if (conflict) {
          return res.status(409).json({
            success: false,
            message: `Template with DLT Template ID '${trimmedDlt}' already exists.`
          });
        }
        updateData.dltTemplateId = trimmedDlt;
      }
    }

    if (name !== undefined) {
      if (!name || typeof name !== "string" || !name.trim()) {
        return res.status(400).json({ success: false, message: "Template Name cannot be empty." });
      }
      updateData.name = name.trim();
    }

    if (dueDate !== undefined) {
      if (!dueDate || typeof dueDate !== "string" || !dueDate.trim()) {
        return res.status(400).json({ success: false, message: "Due Date / Frequency cannot be empty." });
      }
      updateData.dueDate = dueDate.trim();
    }

    if (content !== undefined) {
      if (!content || typeof content !== "string" || !content.trim()) {
        return res.status(400).json({ success: false, message: "SMS Content cannot be empty." });
      }
      updateData.content = content.trim();
    }

    if (ownerName !== undefined) {
      if (!ownerName || typeof ownerName !== "string" || !ownerName.trim()) {
        return res.status(400).json({ success: false, message: "Owner Name cannot be empty." });
      }
      updateData.ownerName = ownerName.trim();
    }

    if (remarks !== undefined) {
      updateData.remarks = remarks ? String(remarks).trim() : null;
    }

    if (attachmentLink1 !== undefined) {
      if (attachmentLink1 && !isValidUrl(attachmentLink1)) {
        return res.status(400).json({
          success: false,
          message: "Attachment Link 1 must be a valid URL."
        });
      }
      updateData.attachmentLink1 = attachmentLink1 ? String(attachmentLink1).trim() : null;
    }

    if (attachmentLink2 !== undefined) {
      if (attachmentLink2 && !isValidUrl(attachmentLink2)) {
        return res.status(400).json({
          success: false,
          message: "Attachment Link 2 must be a valid URL."
        });
      }
      updateData.attachmentLink2 = attachmentLink2 ? String(attachmentLink2).trim() : null;
    }

    if (isActive !== undefined) {
      updateData.isActive = Boolean(isActive);
    }

    const updated = await prisma.template.update({
      where: { id },
      data: updateData,
      include: {
        createdBy: {
          select: { id: true, name: true, employeeId: true }
        },
        updatedBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(200).json({
      success: true,
      message: "Template updated successfully.",
      data: updated
    });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/templates/:id
 * Soft-delete / deactivate template (Only ADMIN)
 */
export async function deleteTemplate(req, res, next) {
  try {
    const { id } = req.params;

    const existing = await prisma.template.findUnique({
      where: { id }
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Template not found."
      });
    }

    // Soft delete: set isActive to false
    const deactivated = await prisma.template.update({
      where: { id },
      data: {
        isActive: false,
        updatedById: req.user.id
      },
      include: {
        updatedBy: {
          select: { id: true, name: true, employeeId: true }
        }
      }
    });

    return res.status(200).json({
      success: true,
      message: "Template deactivated successfully.",
      data: deactivated
    });
  } catch (error) {
    next(error);
  }
}
