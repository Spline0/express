const getAllGames = require("./games");
const checkIsTitleInArray = require("./checkIsTitleInArray");
const updateGamesArray = require("./updateGameArray");
const updateGamesFile = require("./updateGamesFile");
const findGameById = require("./findGameById");
const deleteGame = require("./deleteGame");

module.exports = {
  getAllGames,
  checkIsTitleInArray,
  updateGamesArray,
  updateGamesFile,
  findGameById,
  deleteGame,
};
