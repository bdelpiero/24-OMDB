const S = require("sequelize");
const db = require("../../db");

class Favourite extends S.Model {}

Favourite.init(
  {
    Title: { type: S.STRING, allowNull: false },
    Year: { type: S.STRING },
    imdbID: { type: S.STRING },
    Poster: { type: S.STRING },
    Metascore: { type: S.STRING },
  },
  { sequelize: db, modelName: "favourite" }
);

module.exports = Favourite;
