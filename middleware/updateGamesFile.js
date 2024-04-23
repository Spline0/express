const { writeData } = require("../utils/data"); // Чтение и запись данных в json файл

const updateGamesFile = async (req, res, next) => {
  await writeData("./data/games.json", req.games);
  next();
};

module.exports = updateGamesFile;
