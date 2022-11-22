const airportsService = require("../services/airports.services");

const weatherControllers = {
  createWeatherByAirport: async (req, res) => {
    const { cityName, countryCode, icaoCode } = req.body;
    try {
      const { lat, lon } = await airportsService.getLatAndLonByNameAndCode({ cityName, countryCode });
      const weatherForecast = await airportsService.getWeatherBylatAndLon({ lat, lon });
      const weatherByAirport = await airportsService.createWeatherByAirport(weatherForecast, icaoCode);
      res.json({ weatherByAirport });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllWeatherAirports: async (req, res) => {
    try {
      const airports = await airportsService.getAllWeatherAirports(req.query);
      res.json({ airports });
    } catch (error) {
      console.log(error.message);
    }
  },
  getWeatherAirportByIcaoCode: async (req, res) => {
    console.log(":D")
    try {
      if (req.query.at) {
        console.log("at");
        const airport = await airportsService.getWeatherAirportByIcaoCodeDetMoment(req.params, req.query);
        res.json({ airport });
      } else {
        console.log("desde");
        const airport = await airportsService.getWeatherAirportByIcaoCodeInterval(req.params, req.query);
        console.log(airport);
        res.json({ airport });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = weatherControllers;
