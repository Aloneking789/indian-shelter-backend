import { Router } from "express";
import {
  previewImport,
  confirmImport,
  getImportHistory,
  getImportById
} from "../controllers/importController.js";
import { authenticate } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = Router();

// All import endpoints require authentication
router.use(authenticate);

// Preview uploaded spreadsheet (multipart file)
router.post("/preview", upload.single("file"), previewImport);

// Confirm import (accepts either re-uploaded file or JSON records)
router.post("/confirm", upload.single("file"), confirmImport);

// Import batch history (must be before :id)
router.get("/history", getImportHistory);

// Single batch details
router.get("/:id", getImportById);

export default router;
