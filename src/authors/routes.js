const { Router } = require('express')
const authorRouter = Router()

const { addAuthor } = require('./controllers')
const { getAllAuthors } = require('./controllers')
const { findAuthors } = require('./controllers')
const { deleteAuthor } = require('./controllers')
const { updateAuthor } = require('./controllers')
const { loadAuthors } = require('./controllers')

authorRouter.post('/authors/add', addAuthor)
authorRouter.get('/authors/all', getAllAuthors)
authorRouter.get('/authors/find', findAuthors)
authorRouter.delete('/authors/delete', deleteAuthor)
authorRouter.put('/authors/update', updateAuthor)
authorRouter.post('/authors/load', loadAuthors)

module.exports = authorRouter