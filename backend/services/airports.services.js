const axios = require("axios");
const { Op } = require("sequelize");
const Airport = require("../models/airports");
const { getFormattedAirports } = require("../utils/utils");

const airportsService = {
  getLatAndLonByNameAndCode: async ({ cityName, countryCode }) => {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=80fc5972f8e21aaaf6899b0729eb1953`
    );
    if (!response.data) throw new Error("Nout Found");
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    return { lat, lon };
  },

  getWeatherBylatAndLon: async ({ lat, lon }) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=80fc5972f8e21aaaf6899b0729eb1953&units=metric&lang=es`
    );
    return response.data.list;
  },

  createWeatherByAirport: async (weatherForecast, icaoCode) => {
    const formattedAirport = getFormattedAirports(weatherForecast, icaoCode);
    const response = await Airport.bulkCreate(formattedAirport);
    return response;
  },

  getAllWeatherAirports: async ({ at }) => {
    return response = await Airport.findAll({
      where: {
        created_at: at,
      },
    });
  },
  getWeatherAirportByIcaoCodeDetMoment: async ({ icaoCode }, { at }) => {
    const response = await Airport.findOne({
      where: {
        icaoCode,
        created_at: at
      },
    });
    if(!response) throw new Error('Error, code ICAO not found')
    return response
  },
  getWeatherAirportByIcaoCodeInterval: async({ icaoCode }, {desde, hasta, frecuencia}) => {
    const response = await Airport.findAll({
      where: {
        icaoCode,
        created_at: {
          [Op.between]: [desde, hasta]
        }
      }
    })
    if(!response) throw new Error('Not found')
    return response
  }
};

module.exports = airportsService;
