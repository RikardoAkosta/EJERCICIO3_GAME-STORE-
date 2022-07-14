const express = require("express");

//Controllers
const {
  getAllConsoles,
  createConsole,
  updateConsole,
  deleteConsole,
} = require("../controllers/console.controller");

//Middlewares
const {
  createConsoleValidators,
} = require("../middlewares/validators.middleware");
const { consoleExists } = require("../middlewares/consoles.middleware");
const { protectSession } = require("../middlewares/auth.middleware");

const consolesRouter = express.Router();

consolesRouter.get("/", getAllConsoles);

consolesRouter
  .use("/", createConsoleValidators, protectSession)
  .route("/")
  .post(createConsole);

consolesRouter
  .use("/:id", protectSession, consoleExists)
  .route("/:id")
  .patch(updateConsole)
  .delete(deleteConsole);

module.exports = { consolesRouter };
