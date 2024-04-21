const gamesRouter = require("express").Router(); // Создали роутер
const {
  sendAllGames,
  deleteGame,
  addGameController,
} = require("../controllers/games");
const getAllGames = require("../middleware/games");
gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);
gamesRouter.post("/games", getAllGames, addGameController);

module.exports = gamesRouter;
