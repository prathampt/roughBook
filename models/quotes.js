const mongoose = require('mongoose')

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  quote: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Quote', quoteSchema)