import { Files } from "files-sdk";
import { neon } from "files-sdk/neon";

const bucket = process.env.NEON_STORAGE_BUCKET || "uploads";

// Initialize Files SDK with Neon Object Storage adapter
const files = new Files({ adapter: neon({ bucket }) });

/**
 * Upload a file (Buffer, Uint8Array, or String) to Neon Object Storage
 * @param {string} key - S3 object key / path
 * @param {Buffer|string|ReadableStream} data - File content
 * @param {object} [options] - Content type and metadata
 */
export async function uploadFile(key, data, options = {}) {
  const sanitizedKey = key.replace(/^\/+/, "");
  await files.upload(sanitizedKey, data, {
    contentType: options.contentType || "application/octet-stream",
    metadata: options.metadata || {}
  });

  const url = await getFileUrl(sanitizedKey, options.expiresIn || 86400); // 24 hours default

  return {
    bucket,
    key: sanitizedKey,
    url
  };
}

/**
 * Generate a presigned URL for an object in Neon Object Storage
 * @param {string} key - S3 object key
 * @param {number} [expiresIn=3600] - Expiration time in seconds
 */
export async function getFileUrl(key, expiresIn = 3600) {
  const sanitizedKey = key.replace(/^\/+/, "");
  return files.url(sanitizedKey, { expiresIn });
}

/**
 * Download / read an object from Neon Object Storage
 * @param {string} key - S3 object key
 */
export async function downloadFile(key) {
  const sanitizedKey = key.replace(/^\/+/, "");
  const response = await files.download(sanitizedKey);
  return response;
}

/**
 * List objects in the bucket
 * @param {string} [prefix] - Prefix filter
 */
export async function listFiles(prefix = "") {
  const sanitizedPrefix = prefix.replace(/^\/+/, "");
  const result = await files.list(sanitizedPrefix ? { prefix: sanitizedPrefix } : undefined);
  return result;
}

/**
 * Delete an object from Neon Object Storage
 * @param {string} key - S3 object key
 */
export async function deleteFile(key) {
  const sanitizedKey = key.replace(/^\/+/, "");
  await files.delete(sanitizedKey);
  return { success: true, key: sanitizedKey };
}

export { files, bucket };
