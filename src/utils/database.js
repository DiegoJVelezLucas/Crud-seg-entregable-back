const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  database: "segundo_entregable",
  port: 5432,
  username: "postgres",
  password: "04082017",
  dialect: "postgres",
});
module.exports = db;
