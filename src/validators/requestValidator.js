import { body } from "express-validator";

export const createRequestValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage(
      "Name is required"
    ),

  body("email")
    .trim()
    .isEmail()
    .withMessage(
      "Valid email is required"
    ),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage(
      "Phone number is required"
    ),

  body("projectType")
    .trim()
    .notEmpty()
    .withMessage(
      "Project Type is required"
    ),

  body("description")
    .trim()
    .notEmpty()
    .withMessage(
      "Project description is required"
    ),
];