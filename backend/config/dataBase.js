const { Sequelize } = require("sequelize");
const { DATABASE, PASSWORD, HOST_DATABASE, USERNAME_DATABASE } = require("./environments");

const sequelize = new Sequelize(
  DATABASE,
  USERNAME_DATABASE,
  PASSWORD,
  {
    host: HOST_DATABASE,
    dialect: "postgres",
  }
);

async function initSequelize() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, initSequelize };
