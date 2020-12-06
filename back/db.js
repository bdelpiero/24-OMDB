const Sequelize = require("sequelize");
const config = require("../config/config.json");
let db;

if (config.use_env_variable) {
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false, //false
  });
} else {
  db = new Sequelize("postgres://localhost/omdb", { logging: false });
}

// if (process.env.DATABASE_URL) {
//   db = new Sequelize(process.env.DATABASE_URL, {
//     dialect: "postgres",
//     protocol: "postgres",
//     port: 5432,
//     host: "<heroku host>",
//     logging: false,
//   });
// } else {
//   db = new Sequelize("postgres://localhost/omdb", { logging: false });
// }

module.exports = db;
