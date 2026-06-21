import express from "express";

import { login } from "../controllers/authController.js";
import { loginValidation } from "../validators/authValidator.js";
import validateMiddleware from "../middleware/validateMiddleware.js";
import { authLimiter } from "../middleware/rateLimitMiddleware.js";

const router = express.Router();

router.post("/login", authLimiter, loginValidation, validateMiddleware , login);

export default router;