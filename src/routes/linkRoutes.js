import { Router } from "express";
import {
  getLinks,
  getLinkById,
  createLink,
  updateLink,
  deleteLink
} from "../controllers/linkController.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

// Read links
router.get("/", authenticate, getLinks);
router.get("/:id", authenticate, getLinkById);

// Create, update, delete links
router.post("/", authenticate, createLink);
router.patch("/:id", authenticate, updateLink);
router.delete("/:id", authenticate, deleteLink);

export default router;
