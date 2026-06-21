import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getDashboardAnalytics } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/stats", authMiddleware, getDashboardAnalytics);

export default router;