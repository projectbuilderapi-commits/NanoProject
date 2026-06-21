import { body } from "express-validator";

export const loginValidation = [
  body("email")
    .isEmail()
    .withMessage(
      "Valid email required"
    ),

  body("password")
    .notEmpty()
    .withMessage(
      "Password required"
    ),
];