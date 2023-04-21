const { Router } = require('express')
const authorRouter = Router()

const { addGenre } = require('./controllers')
const { getAllGenres } = require('./controllers')
const { findGenres } = require('./controllers')
const { deleteGenre } = require('./controllers')
const { deleteAllGenres } = require('./controllers')
const { updateGenre } = require('./controllers')
const { loadGenres } = require('./controllers')

authorRouter.post('/genres/add', addGenre)
authorRouter.get('/genres/all', getAllGenres)
authorRouter.get('/genres/find', findGenres)
authorRouter.delete('/genres/delete', deleteGenre)
authorRouter.delete('/genres/delete/all', deleteAllGenres)
authorRouter.put('/genres/update', updateGenre)
authorRouter.post('/genres/load', loadGenres)

module.exports = authorRouter