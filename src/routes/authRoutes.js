import { Router } from "express";
import { login, getMe, changePassword } from "../controllers/authController.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

// Public route
router.post("/login", login);

// Protected routes
router.get("/me", authenticate, getMe);
router.post("/change-password", authenticate, changePassword);

export default router;
