const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dataBase");

const Airport = sequelize.define(
  "airports",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    weatherMain: { type: DataTypes.STRING, allowNull: false },
    weatherDescription: { type: DataTypes.STRING, allowNull: false },
    mainTemp: { type: DataTypes.FLOAT, allowNull: false },
    mainFeelsLike: { type: DataTypes.FLOAT, allowNull: false },
    mainTempMin: { type: DataTypes.FLOAT, allowNull: false },
    mainTempMax: { type: DataTypes.FLOAT, allowNull: false },
    mainPressure: { type: DataTypes.FLOAT, allowNull: false },
    mainSeaLevel: { type: DataTypes.FLOAT, allowNull: false },
    mainGrndLevel: { type: DataTypes.FLOAT, allowNull: false },
    mainHumidity: { type: DataTypes.FLOAT, allowNull: false },
    mainTempKf: { type: DataTypes.FLOAT, allowNull: false },
    clouds: { type: DataTypes.FLOAT, allowNull: false },
    windSpeed: { type: DataTypes.FLOAT, allowNull: false },
    windDeg: { type: DataTypes.FLOAT, allowNull: false },
    windGust: { type: DataTypes.FLOAT, allowNull: false },
    icaoCode: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false },
    
  },
  {
    timestamps: false
  }
);

module.exports = Airport;
