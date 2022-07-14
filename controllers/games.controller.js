//Models
const { Game } = require("../models/game.model");

//Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const getAllGames = catchAsync(async (req, res, next) => {
  const games = await Game.findAll();

  res.status(200).json({
    status: "success",
    games,
  });
});

const createGame = catchAsync(async (req, res, next) => {
  const { title, genre } = req.body;

  newGame = await Game.create({
    title,
    genre,
  });

  res.status(201).json({
    status: "success",
    newGame,
  });
});

const updateGame = catchAsync(async (req, res, next) => {
  const { game } = req;
  const { title } = req.body;
  const { genre } = req.body;

  await game.update({ title, genre });

  res.status(204).json({ status: "success" });
});

const deleteGame = catchAsync(async (req, res, next) => {
  const { game } = req;

  await game.update({ status: "deleted" });

  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllGames,
  createGame,
  updateGame,
  deleteGame,
};
