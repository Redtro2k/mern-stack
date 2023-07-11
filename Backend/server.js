require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONG_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT} And Connected to DB!`)
        })
    })
    .catch((err) => {
        console.log(err)
    })