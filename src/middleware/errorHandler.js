/**
 * Centralized Express error handling middleware
 */
export function errorHandler(err, req, res, next) {
  console.error(`[Error] ${req.method} ${req.originalUrl}:`, err);

  // Prisma unique constraint violation (P2002)
  if (err.code === "P2002") {
    const target = Array.isArray(err.meta?.target) ? err.meta.target.join(", ") : (err.meta?.target || "field");
    return res.status(409).json({
      success: false,
      message: `A record with this ${target} already exists.`,
      field: target
    });
  }

  // Prisma record not found (P2025)
  if (err.code === "P2025") {
    return res.status(404).json({
      success: false,
      message: "The requested record could not be found."
    });
  }

  // Multer file upload errors
  if (err.name === "MulterError") {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "File size exceeds the 20MB limit."
      });
    }
    return res.status(400).json({
      success: false,
      message: `File upload error: ${err.message}`
    });
  }

  // Custom validation or file type errors
  if (err.message && err.message.includes("Invalid file type")) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  // Default server error
  const statusCode = err.status || err.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || "An unexpected internal server error occurred.",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
}
