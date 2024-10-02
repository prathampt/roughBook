const Quote = require('../models/quotes')

const getQuotes = async (req, res) => {
    const quotes = await Quote.find({}).sort({createdAt: -1})

    res.status(200).json(quotes)
}

const getRandomQuote = async (req, res) => {
    const randomQuote = await Quote.aggregate().sample(1)

    res.status(200).json(randomQuote)
}

const addQuote = async (req, res) => {
    const { quote } = req.body

    if (!quote) {
        return res.status(400).json({error: "Please provide a quote!"})
    }

    try {
        const q = await Quote.create({ quote })
        res.status(200).json(q)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getQuotes,
    getRandomQuote,
    addQuote
}