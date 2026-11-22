import { Router } from "express";
import {
  getStaffList,
  createStaff,
  changeStaffPassword,
  updateStaff,
  deleteStaff
} from "../controllers/staffController.js";
import { authenticate } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = Router();

// All staff management routes require active Admin authentication
router.use(authenticate, authorize("ADMIN"));

router.get("/", getStaffList);
router.post("/", createStaff);
router.patch("/:id/password", changeStaffPassword);
router.patch("/:id", updateStaff);
router.delete("/:id", deleteStaff);

export default router;
