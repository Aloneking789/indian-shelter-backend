import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import templateRoutes from "./routes/templateRoutes.js";
import importRoutes from "./routes/importRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import storageRoutes from "./routes/storageRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "India Shelter Internal SMS Template Management API",
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/import", importRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/storage", storageRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/staff", staffRoutes);

// Catch 404 for unknown endpoints
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint '${req.method} ${req.originalUrl}' not found.`
  });
});

// Centralized Error Handling
app.use(errorHandler);

export default app;
