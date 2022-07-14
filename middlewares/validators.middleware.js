const { body, validationResult } = require("express-validator");

const { AppError } = require("../utils/appError.util");

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMsgs = errors.array().map(err => err.msg);

    const message = errorMsgs.join(", ");

    return next(new AppError(message, 400));
  }

  next();
};

const createUserValidators = [
  body("name").notEmpty().withMessage("Name can't be empy"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .isAlphanumeric()
    .withMessage("Password must contain letters and numbers"),
  checkResult,
];

const createGameValidators = [
  body("title").notEmpty().withMessage("Title can't be empty"),
  body("genre").notEmpty().withMessage("Genre can't be empty"),
];

const createConsoleValidators = [
  body("name").notEmpty().withMessage("Name can't be empty"),
  body("company").notEmpty().withMessage("Company can't be empty"),
];

module.exports = {
  createUserValidators,
  createGameValidators,
  createConsoleValidators,
};
