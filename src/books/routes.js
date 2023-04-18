const { Router } = require('express')
const bookRouter = Router()

const { addBook } = require('./controllers')
const { getAllBooks } = require('./controllers')
const { findBooks } = require('./controllers')
const { deleteBook } = require('./controllers')

bookRouter.post('/books/addbook', addBook)
bookRouter.get('/books/all', getAllBooks)
bookRouter.get('/books/find', findBooks)
bookRouter.delete('/books/delete', deleteBook)

module.exports = bookRouter