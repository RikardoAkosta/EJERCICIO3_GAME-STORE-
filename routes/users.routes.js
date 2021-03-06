const express = require("express");

//Controllers
const {
  createUser,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/users.controller");

//Middlewares
const {
  createUserValidators,
} = require("../middlewares/validators.middleware");
const { userExists } = require("../middlewares/users.middleware");
const {
  protectSession,
  protectUserAccount,
} = require("../middlewares/auth.middleware");

const usersRouter = express.Router();

usersRouter.post("/", createUserValidators, createUser);

usersRouter.post("/login", login);

usersRouter.use(protectSession);

usersRouter.get("/", getAllUsers);

usersRouter
  .use("/:id", userExists)
  .route("/:id")
  .patch(protectUserAccount, updateUser)
  .delete(protectUserAccount, deleteUser);

module.exports = { usersRouter };
