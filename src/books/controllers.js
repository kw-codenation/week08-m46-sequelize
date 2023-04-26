const Book = require('./model')

// add a book - requires a valid author and genre id
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

//get all the books in the table books, this will include
// all assoicated author and genre data
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

// This is supposed to be the one link for all finds
// and the criteria is determined by the key 'search'
//
// search = 'author' will search for books by a particular author
//
// search = 'genre' will search for all books with a particular genre
//
// search = '' will find all books
//
//
const findBooks = async (req, res) =>     
{
    try 
    {
        console.log(req.body)
        
        let books = ''
        
        if (req.body.search == 'author')
        {
            books = await Book.findAll({where: {authorId: req.body.value }, include: [{all:true}]})
        }
        else if (req.body.search == 'genre')
        {
            books = await Book.findAll({where: {genreId: req.body.value }, include: [{all:true}]})
        }
        else
        {
            books = await Book.findAll({include: [{all:true}]})
        }

        res.status(201).json({message: 'success ' + books.length + ' found', count:books.length, books:books})
        
    } 
    catch (error) 
    {
        console.log('findBook error: ' + error)    
    }
}

// delete a book using an Id
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

// delete all books on the book table
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

// update book, two keys needed 'criteria' and 'where'
//
// criteria = {"title":"A Great Book"}
// where = {"author":"A Fantastic Author"}
//
// this will change the title of a book to "A Great Book"
// for every book in the table 'books' that arewritten 
// by 'A Fansatcid Author'
//
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

 // load 8 books on to the table 'books'
 // there are equlivalent links for 'authors'
 // and 'genres' and must be run first before
 // executing loadBooks   
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