import express from "express";

import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { createProjectValidation } from "../validators/projectValidator.js";
import validateMiddleware from "../middleware/validateMiddleware.js";

const router =
  express.Router();

router.get(
  "/",
  getProjects
);

router.get(
  "/:id",
  getProjectById
);

router.post("/", createProjectValidation, validateMiddleware, authMiddleware, createProject);

router.put("/:id", authMiddleware, updateProject);

router.delete("/:id", authMiddleware, deleteProject)

export default router;