const express = require('express')
const { 
    getQuotes,
    getRandomQuote,
    addQuote
} = require('../controllers/quotesController')

const router = express.Router()

router.get('/', getQuotes)

router.get('/random', getRandomQuote)

router.post('/', addQuote)

module.exports = router