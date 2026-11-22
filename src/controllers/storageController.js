import path from "path";
import {
  uploadFile,
  getFileUrl,
  downloadFile,
  listFiles,
  deleteFile,
  bucket
} from "../services/storageService.js";

/**
 * POST /api/storage/upload
 * Upload a binary file (photo, document, spreadsheet) to Neon Object Storage
 * Admin only
 */
export async function uploadFileHandler(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded. Please upload a file via multipart form-data."
      });
    }

    const folder = (req.body.folder || req.query.folder || "general").replace(/[^a-zA-Z0-9_-]/g, "");
    const safeName = path.basename(req.file.originalname).replace(/[^a-zA-Z0-9._-]/g, "_");
    const key = `${folder}/${Date.now()}-${safeName}`;

    const uploaded = await uploadFile(key, req.file.buffer, {
      contentType: req.file.mimetype || "application/octet-stream",
      metadata: {
        originalName: req.file.originalname,
        uploadedBy: req.user ? req.user.id : "system"
      }
    });

    return res.status(201).json({
      success: true,
      message: "File uploaded successfully to Neon Object Storage.",
      data: {
        bucket,
        key: uploaded.key,
        url: uploaded.url,
        fileName: req.file.originalname,
        size: req.file.size,
        contentType: req.file.mimetype
      }
    });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/storage/text
 * Upload text or JSON content to Neon Object Storage
 * Admin only
 */
export async function uploadTextHandler(req, res, next) {
  try {
    const { key, content, contentType = "text/plain" } = req.body;

    if (!key || typeof key !== "string" || !key.trim()) {
      return res.status(400).json({
        success: false,
        message: "Key is required for the object."
      });
    }

    if (content === undefined || content === null) {
      return res.status(400).json({
        success: false,
        message: "Content is required."
      });
    }

    const textData = typeof content === "object" ? JSON.stringify(content, null, 2) : String(content);
    const resolvedContentType = typeof content === "object" ? "application/json" : contentType;

    const uploaded = await uploadFile(key.trim(), textData, {
      contentType: resolvedContentType
    });

    return res.status(201).json({
      success: true,
      message: "Content stored successfully in Neon Object Storage.",
      data: uploaded
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/storage/files
 * List objects in the Neon Object Storage bucket
 * Admin only
 */
export async function listFilesHandler(req, res, next) {
  try {
    const { prefix = "" } = req.query;
    const result = await listFiles(prefix);

    const items = Array.isArray(result) ? result : result.items || [];

    return res.status(200).json({
      success: true,
      bucket,
      prefix,
      count: items.length,
      data: items
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/storage/url
 * Get a presigned download / view URL for any object key
 * Admin only
 */
export async function getUrlHandler(req, res, next) {
  try {
    const { key, expiresIn } = req.query;

    if (!key || typeof key !== "string" || !key.trim()) {
      return res.status(400).json({
        success: false,
        message: "Query parameter 'key' is required."
      });
    }

    const expirySeconds = expiresIn ? parseInt(expiresIn, 10) : 3600;
    const url = await getFileUrl(key.trim(), expirySeconds);

    return res.status(200).json({
      success: true,
      key: key.trim(),
      url,
      expiresInSeconds: expirySeconds
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/storage/read
 * Download and read text or JSON content directly from Neon Object Storage
 * Admin only
 */
export async function readFileHandler(req, res, next) {
  try {
    const { key } = req.query;

    if (!key || typeof key !== "string" || !key.trim()) {
      return res.status(400).json({
        success: false,
        message: "Query parameter 'key' is required."
      });
    }

    const downloaded = await downloadFile(key.trim());
    const content = await downloaded.text();

    return res.status(200).json({
      success: true,
      key: key.trim(),
      content
    });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/storage/file
 * Delete an object from Neon Object Storage
 * Admin only
 */
export async function deleteFileHandler(req, res, next) {
  try {
    const key = req.body?.key || req.query?.key;

    if (!key || typeof key !== "string" || !key.trim()) {
      return res.status(400).json({
        success: false,
        message: "Object 'key' is required to delete."
      });
    }

    const result = await deleteFile(key.trim());

    return res.status(200).json({
      success: true,
      message: `File '${key.trim()}' deleted successfully from bucket '${bucket}'.`,
      data: result
    });
  } catch (error) {
    next(error);
  }
}
