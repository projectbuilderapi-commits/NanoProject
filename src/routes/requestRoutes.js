import express from "express";

import {
  getRequests,
  getRequestById,
  createRequest,
  updateRequestStatus,
  getRecentRequests,
  getDeleteRequest,
} from "../controllers/requestController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import validateMiddleware from "../middleware/validateMiddleware.js";
import { createRequestValidation } from "../validators/requestValidator.js";
import { requestLimiter } from "../middleware/rateLimitMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getRequests);

router.get("/recent", authMiddleware, getRecentRequests);

router.get("/:id", authMiddleware, getRequestById);

router.post("/", requestLimiter, createRequestValidation, validateMiddleware, createRequest);

router.patch("/:id/status", authMiddleware, updateRequestStatus);

router.delete("/:id", authMiddleware, getDeleteRequest);

export default router;