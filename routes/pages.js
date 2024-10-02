const express = require('express')
const {
  getPagelist, 
  getPage, 
  writePage, 
  deletePage, 
  updatePage
} = require('../controllers/pagesController')

const router = express.Router()

router.get('/', getPagelist)

router.get('/:id', getPage)

router.post('/', writePage)

router.delete('/:id', deletePage)

router.patch('/:id', updatePage)

module.exports = router