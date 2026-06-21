import { body } from "express-validator";

export const createProjectValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage(
      "Project title is required"
    ),

  body("category")
    .trim()
    .notEmpty()
    .withMessage(
      "Category is required"
    ),

  body("description")
    .trim()
    .notEmpty()
    .withMessage(
      "Description is required"
    ),
];