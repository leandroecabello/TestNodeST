const express = require('express')
const morgan = require('morgan')
const restaurantsRoutes = require('./routes/restaurants.routes')
const app = express()


// settings
app.set('port', process.env.PORT || 3000)

// middelwares
app
    .use(morgan('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))

// routes
app.use('/restaurants', restaurantsRoutes)

module.exports = app