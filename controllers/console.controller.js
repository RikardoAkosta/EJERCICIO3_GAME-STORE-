//Models
const { Console } = require("../models/console.model");

//Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

const getAllConsoles = catchAsync(async (req, res, next) => {
  const consoles = await Console.findAll();

  res.status(200).json({
    status: "success",
    consoles,
  });
});

const createConsole = catchAsync(async (req, res, next) => {
  const { name, company } = req.body;

  newConsole = await Console.create({
    name,
    company,
  });

  res.status(201).json({
    status: "success",
    newConsole,
  });
});

const updateConsole = catchAsync(async (req, res, next) => {
  const { console } = req;
  const { name } = req.body;
  const { company } = req.body;

  await console.update({ name, company });

  res.status(204).json({ status: "success" });
});

const deleteConsole = catchAsync(async (req, res, next) => {
  const { console } = req;

  await console.update({ status: "deleted" });

  res.status(204).json({ status: "success" });
});

module.exports = {
  getAllConsoles,
  createConsole,
  updateConsole,
  deleteConsole,
};
