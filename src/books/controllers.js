const Book = require('./model')
const Author = require('../authors/model')
const Genre = require('../genres/model')

const addBook = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const book = await Book.create
            (
                {title: req.body.title
                ,authorId: req.body.authorId
                ,genreId: req.body.genreId
                }
            )

            res.status(201).json({message: book.title +' has been added successfully id: ' + book.id, books:book})
        } 
        catch (error) 
        {
            console.log('addBook error:' + error)    
        }

    }

    const getAllBooks = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const books = await Book.findAll({include: [{all:true}]})

            res.status(201).json({message: 'success (' + books.length + ') found', books:books, count:books.length})
        } 
        catch (error) 
        {
            console.log('getAllBooks error: ' + error)    
        }

    }

    const findBooks = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            
            let books = ''
            if (req.body.search === 'none')
            {
                console.log('none')
                books = await Book.findAll({include: [{all:true}]})
            }
            else if (req.body.search == 'author')
            {
                books = await Book.findAll({where: {authorId: req.body.value }, include: [{all:true}]})
            }
            else if (req.body.search == 'genre')
            {
                books = await Book.findAll({where: {genreId: req.body.value }, include: [{all:true}]})
            }

            res.status(201).json({message: 'success ' + books.length + ' found', count:books.length, books:books})
            
        } 
        catch (error) 
        {
            console.log('findBook error: ' + error)    
        }

    }

    const deleteBook = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            await Book.destroy({where:req.body})

            res.status(201).json({message: 'book using criteria ' + JSON.stringify(req.body) + ' successfully deleted'})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    const deleteAllBooks = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            await Book.destroy()

            res.status(201).json({message: 'all rows on the book table successfully deleted'})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    const updateBook = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const book = await Book.update
                                (req.body.criteria,
                                {where:req.body.where}
                                )

            res.status(200).json({message: 'Update of book id (' + req.body.where.id + ') using criteria ' + JSON.stringify(req.body.criteria) + ' successful', book:book})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    
    const loadBooks = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            await Book.bulkCreate
            (
                [
                    {
                        "title":"The Three Musketeers",
                        "authorId":4,
                        "genreId":3
                    },
                    {
                        "title":"The Nine Tailers",
                        "authorId":3,
                        "genreId":8
                    },
                    {
                        "title":"Around The World In Eighty Days",
                        "authorId":2,
                        "genreId":3
                    },
                    {
                        "title":"Death On The Nile",
                        "authorId":1,
                        "genreId":8
                    },
                    {
                        "title":"Twenty Thousand Leagues Under the Sea",
                        "authorId":2,
                        "genreId":6
                    },
                    {
                        "title":"Evil Under The Sun",
                        "authorId":1,
                        "genreId":8
                    },
                    {
                        "title":"The Man In The Iron Mask",
                        "authorId":4,
                        "genreId":3
                    },
                    {
                        "title":"Gaudy Night",
                        "authorId":3,
                        "genreId":8
                    }
                ]
            )

            res.status(201).json({message: '8 books have been loaded on to the the book table successfully'})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }


module.exports = {
    addBook,
    getAllBooks,
    findBooks,
    deleteBook,
    deleteAllBooks,
    updateBook,
    loadBooks
}