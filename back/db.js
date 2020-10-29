const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/omdb", { logging: false });

module.exports = db;
