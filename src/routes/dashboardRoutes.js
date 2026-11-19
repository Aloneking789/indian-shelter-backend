import { Router } from "express";
import { getDashboardOverview } from "../controllers/dashboardController.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

// Dashboard overview requires authentication
router.get("/overview", authenticate, getDashboardOverview);

export default router;
