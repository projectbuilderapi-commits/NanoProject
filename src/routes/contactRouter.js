import express from "express";
import { createContact, getContacts, getContactById, deleteContact } from "../controllers/contactController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createContact);

router.get(
  "/",
  authMiddleware,
  getContacts
);

router.get(
  "/:id",
  authMiddleware,
  getContactById
);

router.delete(
  "/:id",
  authMiddleware,
  deleteContact
);

export default router;