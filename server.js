require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (res, req) => {
    req.json({message: "Hello World!"})
})

app.listen(process.env.PORT, () => {
    console.log("Listening on Port:", process.env.PORT)
})