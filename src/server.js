require('dotenv').config()
const express = require('express')
const cors = require('cors')

const Book = require('./books/model')
const Author = require('./authors/model')

const bookRouter = require('./books/routes')
const authorRouter = require('./authors/routes')

const app = express()
app.use(cors())

app.use(express.json())

const syncTables = () =>
{
    Book.sync(),
    Author.sync()
}
app.use(bookRouter, authorRouter)

app.get('/health', (req, res) => 
    {
        res.status(200).json({ message: 'App is healthy' })
    }
)

app.listen(5001, () => 
    {
        syncTables()
        console.log('Server is listening')
    }
)