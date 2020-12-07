const Sequelize = require("sequelize");
const config = require("../config/config.json");
let db;

// if (config.use_env_variable) {
//   db = new Sequelize(process.env.DATABASE_URL, {
//     dialect: "postgres",
//     protocol: "postgres",
//     logging: false, //false
//   });
// } else {
//   db = new Sequelize("postgres://localhost/omdb", { logging: false });
// }

if (process.env.DATABASE_URL) {
  console.log("app ejecutada con heroku");
  // the application is executed on Heroku ... use the postgres
  db = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    port: 5432,
    host: "<heroku host>",
    logging: true,
  });
} else {
  console.log("app ejecutada en local host");
  // the application is executed on the local machine ... use mysql
  db = new Sequelize("postgres://localhost/omdb", {
    logging: false,
    dialect: "postgres",
  });
}
module.exports = db;
