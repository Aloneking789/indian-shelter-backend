import * as XLSX from "xlsx";

/**
 * Normalizes header string for fuzzy matching
 */
function normalizeHeader(header) {
  return String(header || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

/**
 * Validates whether a string is a valid URL
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
 * Maps Excel row to template object based on detected headers
 */
function mapRowToTemplate(row, headerMap) {
  const getVal = (key) => {
    const actualHeader = headerMap[key];
    if (actualHeader && row[actualHeader] !== undefined) {
      return String(row[actualHeader]).trim();
    }
    return "";
  };

  return {
    dltTemplateId: getVal("dltTemplateId"),
    name: getVal("name"),
    dueDate: getVal("dueDate"),
    content: getVal("content"),
    ownerName: getVal("ownerName"),
    remarks: getVal("remarks") || null,
    attachmentLink1: getVal("attachmentLink1") || null,
    attachmentLink2: getVal("attachmentLink2") || null
  };
}

/**
 * Parse an Excel/CSV file buffer into normalized rows
 * @param {Buffer} buffer 
 * @returns {{ headers: string[], rows: object[] }}
 */
export function parseSpreadsheet(buffer) {
  const workbook = XLSX.read(buffer, {
    type: "buffer",
    cellDates: false,
    raw: true // Preserves exact string formats, Unicode/Hindi text, and integers
  });

  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("Spreadsheet contains no sheets.");
  }

  const sheet = workbook.Sheets[sheetName];
  const rawRows = XLSX.utils.sheet_to_json(sheet, {
    defval: "",
    raw: false // Formats cell values as display strings
  });

  if (!rawRows || rawRows.length === 0) {
    return { headers: [], rows: [] };
  }

  // Detect headers
  const detectedHeaders = Object.keys(rawRows[0]);
  const headerMap = {};

  for (const h of detectedHeaders) {
    const norm = normalizeHeader(h);

    if (norm.includes("dlttemplateid") || norm.includes("dltid") || (norm.includes("templateid") && !norm.includes("name"))) {
      headerMap.dltTemplateId = h;
    } else if (norm === "name" || norm.includes("templatename")) {
      headerMap.name = h;
    } else if (norm.includes("duedate") || norm.includes("frequency")) {
      headerMap.dueDate = h;
    } else if (norm === "content" || norm.includes("smscontent") || norm.includes("message")) {
      headerMap.content = h;
    } else if (norm.includes("ownername") || norm === "owner") {
      headerMap.ownerName = h;
    } else if (norm.includes("remark") || norm.includes("comment")) {
      headerMap.remarks = h;
    } else if (norm.includes("attachmentlink1") || norm.includes("attachment1") || norm.includes("link1")) {
      headerMap.attachmentLink1 = h;
    } else if (norm.includes("attachmentlink2") || norm.includes("attachment2") || norm.includes("link2")) {
      headerMap.attachmentLink2 = h;
    }
  }

  // Map each row
  const rows = rawRows.map((rawRow, idx) => {
    const data = mapRowToTemplate(rawRow, headerMap);
    return {
      rowNumber: idx + 2, // 1-based index + header row
      data
    };
  });

  return {
    headers: detectedHeaders,
    headerMap,
    rows
  };
}

/**
 * Validate parsed rows against database and rules
 * @param {Array} rows 
 * @param {Set<string>} existingDltIds Set of DLT IDs that already exist in DB
 * @returns {Array} Validated rows with errors and status
 */
export function validateRows(rows, existingDltIds = new Set()) {
  const seenInFile = new Set();
  
  return rows.map((rowItem) => {
    const { rowNumber, data } = rowItem;
    const errors = [];
    let isDuplicate = false;

    // Check required fields
    if (!data.dltTemplateId) {
      errors.push("DLT Template ID is missing.");
    }
    if (!data.name) {
      errors.push("Template Name is missing.");
    }
    if (!data.dueDate) {
      errors.push("Due Date / Frequency is missing.");
    }
    if (!data.content) {
      errors.push("SMS Content is missing.");
    }
    if (!data.ownerName) {
      errors.push("Owner Name is missing.");
    }

    // Attachment URLs validation
    if (data.attachmentLink1 && !isValidUrl(data.attachmentLink1)) {
      errors.push("Attachment Link 1 is not a valid URL.");
    }
    if (data.attachmentLink2 && !isValidUrl(data.attachmentLink2)) {
      errors.push("Attachment Link 2 is not a valid URL.");
    }

    // Check duplicates
    if (data.dltTemplateId) {
      if (seenInFile.has(data.dltTemplateId)) {
        errors.push(`Duplicate DLT Template ID '${data.dltTemplateId}' within the uploaded file.`);
        isDuplicate = true;
      } else {
        seenInFile.add(data.dltTemplateId);
      }

      if (existingDltIds.has(data.dltTemplateId)) {
        errors.push(`DLT Template ID '${data.dltTemplateId}' already exists in database.`);
        isDuplicate = true;
      }
    }

    const isValid = errors.length === 0;

    return {
      rowNumber,
      isValid,
      isDuplicate,
      errors,
      data
    };
  });
}
