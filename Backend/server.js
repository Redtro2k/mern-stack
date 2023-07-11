require('dotenv').config();
const express = require('express')
const app = express()

//routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the App'})
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}!`)
})