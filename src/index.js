import "./config/prisma.js"; // ensures env is loaded and prisma adapter configured
import app from "./app.js";

const PORT = parseInt(process.env.PORT || "5001", 10);

const server = app.listen(PORT, () => {
  console.log(`🚀 India Shelter SMS Template Backend running on port ${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
});

// Graceful shutdown handling
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated.");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully...");
  server.close(() => {
    console.log("Process terminated.");
  });
});
