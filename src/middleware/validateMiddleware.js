import { validationResult } from "express-validator";

const validateMiddleware = (
  req,
  res,
  next
) => {
  const errors = validationResult(req);

  const formattedErrors = errors.array().map((error) => error.msg);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: formattedErrors
    });
  }

  next();
};

export default validateMiddleware;