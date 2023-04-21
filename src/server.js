require('dotenv').config()
const express = require('express')
const cors = require('cors')

const Book = require('./books/model')
const Author = require('./authors/model')
const Genre = require('./genres/model')

const bookRouter = require('./books/routes')
const authorRouter = require('./authors/routes')
const genreRouter = require('./genres/routes')

const app = express()
app.use(cors())

app.use(express.json())

const syncTables = () =>
{
    Author.hasMany(Book)
    Book.belongsTo(Author)

    Genre.hasMany(Book)
    Book.belongsTo(Genre)
    
    Book.sync({ alter:true, force:true }),
    Author.sync()
    Genre.sync()

}
app.use(bookRouter, authorRouter, genreRouter)

app.listen(5001, () => 
    {
        syncTables()
        console.log('Server is listening')
    }
)