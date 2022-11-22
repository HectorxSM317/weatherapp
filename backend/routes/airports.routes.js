const airportsControllers = require('../controllers/airports.controllers')
const router = require('express').Router()


router.get('/createAirports', airportsControllers.createWeatherByAirport)
router.get('/', airportsControllers.getAllWeatherAirports)
router.get('/v1/aeropuertos/:icaoCode', airportsControllers.getWeatherAirportByIcaoCode)



module.exports = router