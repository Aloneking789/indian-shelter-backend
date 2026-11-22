import { Router } from "express";
import {
  uploadFileHandler,
  uploadTextHandler,
  listFilesHandler,
  getUrlHandler,
  readFileHandler,
  deleteFileHandler
} from "../controllers/storageController.js";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";
import { uploadStorage } from "../middleware/upload.js";

const router = Router();

// Storage actions are restricted strictly to ADMIN
router.use(authenticate);
router.use(authorize("ADMIN"));

// Upload binary file (photo, document, attachment)
router.post("/upload", uploadStorage.single("file"), uploadFileHandler);

// Upload text / JSON string content
router.post("/text", uploadTextHandler);

// List objects in bucket
router.get("/files", listFilesHandler);

// Get presigned view / download URL
router.get("/url", getUrlHandler);

// Read / download file contents
router.get("/read", readFileHandler);

// Delete file
router.delete("/file", deleteFileHandler);

export default router;
