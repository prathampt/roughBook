require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const pageRoutes = require('./routes/pages')
const quoteRoutes = require('./routes/quotes')

const app = express()

// middleware
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/pages', pageRoutes)
app.use('/api/quotes', quoteRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('Listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 