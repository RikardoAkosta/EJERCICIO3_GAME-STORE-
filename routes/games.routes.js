const express = require("express");

//Controllers
const {
  getAllGames,
  createGame,
  updateGame,
  deleteGame,
} = require("../controllers/games.controller");

//Middlewares
const {
  createGameValidators,
} = require("../middlewares/validators.middleware");
const { gameExists } = require("../middlewares/games.middleware");
const { protectSession } = require("../middlewares/auth.middleware");

const gamesRouter = express.Router();

gamesRouter.get("/", getAllGames);

gamesRouter
  .use("/", createGameValidators, protectSession)
  .route("/")
  .post(createGame);

gamesRouter
  .use("/:id", gameExists, protectSession)
  .route("/:id")
  .patch(updateGame)
  .delete(deleteGame);

module.exports = { gamesRouter };
