const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("admin", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
  port: "5433",
});

async function initSequelize() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({force: false})
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, initSequelize };
