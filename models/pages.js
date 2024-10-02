const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  idea: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Page', pageSchema)