import express from "express";

import {
  validateCoupon,
} from "../controllers/couponController.js";
import { requestLimiter } from "../middleware/rateLimitMiddleware.js";

const router =
  express.Router();

router.post(
  "/validate",
  requestLimiter,
  validateCoupon
);

export default router;