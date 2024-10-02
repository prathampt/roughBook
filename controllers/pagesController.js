const Page = require('../models/pages')
const mongoose = require('mongoose')

const getPagelist = async (req, res) => {
  const pages = await Page.find({}, '_id title idea').limit(12).sort({createdAt: -1})

  res.status(200).json(pages)
}

const getPage = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such page'})
  }

  const page = await Page.findById(id)

  if (!page) {
    return res.status(404).json({error: 'No such page'})
  }

  res.status(200).json(page)
}

const writePage = async (req, res) => {
  const {title, idea, body} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!idea) {
    emptyFields.push('idea')
  }
  if (!body) {
    emptyFields.push('body')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const page = await Page.create({ title, idea, body })
    res.status(200).json(page)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deletePage = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such page'})
  }

  const page = await Page.findOneAndDelete({_id: id})

  if(!page) {
    return res.status(400).json({error: 'No such page'})
  }

  res.status(200).json(page)
}

const updatePage = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such page'})
  }

  const page = await Page.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!page) {
    return res.status(400).json({error: 'No such page'})
  }

  res.status(200).json(page)
}

module.exports = {
    getPagelist,
    getPage,
    writePage,
    deletePage,
    updatePage
}