const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "dpg-cijpce5gkuvjvn6qu36g-a",
  database: "segundo_entregable",
  port: 5432,
  username: "draktan",
  password: "04082017",
  dialect: "postgres",
});
module.exports = db;
