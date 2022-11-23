require('dotenv').config()
const express = require('express')
const cors = require("cors")
const { PORT } = require('./config/environments')
const router = require('./routes/airports.routes')
const app = express()
const { initSequelize } = require("./config/dataBase")
require('./models/airports')


app.use(cors())
app.use(express.json())
initSequelize()

app.get('/', (req, res) => res.json({info: "'Node.js, Express, and Postgres API'"}))
app.get('/ping', (req, res) => res.json('pong'))
app.use('/api', router)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

module.exports =  app