const { Router } = require('express')
const bookRouter = Router()

const { addBook } = require('./controllers')
const { getAllBooks } = require('./controllers')
const { findBooks } = require('./controllers')
const { deleteBook } = require('./controllers')
const { deleteAllBooks } = require('./controllers')
const { updateBook } = require('./controllers')
const { loadBooks } = require('./controllers')

bookRouter.post('/books/add', addBook)
bookRouter.get('/books/all', getAllBooks)
bookRouter.get('/books/find', findBooks)
bookRouter.delete('/books/delete', deleteBook)
bookRouter.delete('/books/delete/all', deleteAllBooks)
bookRouter.put('/books/update', updateBook)
bookRouter.post('/books/load', loadBooks)

module.exports = bookRouter