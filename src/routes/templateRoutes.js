import { Router } from "express";
import {
  createTemplate,
  getTemplates,
  getOwners,
  getFrequencies,
  getTemplateById,
  updateTemplate,
  deleteTemplate
} from "../controllers/templateController.js";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = Router();

// All template endpoints require authentication
router.use(authenticate);

// Distinct values endpoints (must be before :id)
router.get("/owners", getOwners);
router.get("/frequencies", getFrequencies);

// Standard CRUD
router.post("/", createTemplate);
router.get("/", getTemplates);
router.get("/:id", getTemplateById);
// Update and soft delete require ADMIN role
router.patch("/:id", authorize("ADMIN"), updateTemplate);
router.delete("/:id", authorize("ADMIN"), deleteTemplate);

export default router;
