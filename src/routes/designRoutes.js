import express from "express";

const router =
  express.Router();

import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from
  "../controllers/designController.js"
;
import authMiddleware from "../middleware/authMiddleware.js";

router.post(
  "/",
  authMiddleware,
  createProject
);

router.get(
  "/",
  getProjects
);

router.get(
  "/:id",
  getProjectById
);

router.put(
  "/:id",
  authMiddleware,
  updateProject
);

router.delete(
  "/:id",
  authMiddleware,
  deleteProject
);

export default router;