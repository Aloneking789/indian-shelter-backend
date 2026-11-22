import { Router } from "express";
import {
  getTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember
} from "../controllers/teamController.js";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = Router();

// Public / Authenticated read routes
router.get("/", getTeamMembers);
router.get("/:id", getTeamMemberById);

// Admin-only mutation routes
router.post("/", authenticate, authorize("ADMIN"), createTeamMember);
router.patch("/:id", authenticate, authorize("ADMIN"), updateTeamMember);
router.delete("/:id", authenticate, authorize("ADMIN"), deleteTeamMember);

export default router;
