const Book = require('./model')

const addBook = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const book = await Book.create
            (
                {title: req.body.title
                ,author: req.body.author
                ,genre: req.body.genre
                }
            )

            res.status(201).json({message: book.title +' has been added successfully id: ' + book.id, book:book})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    const getAllBooks = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const books = await Book.findAll()

            res.status(201).json({message: 'success (' + books.length + ') found', books:books, count:books.length})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    const findBooks = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const books = await Book.findAll({where:req.body})

            res.status(201).json({message: 'success ' + books.length + ' found', books:books})
        } 
        catch (error) 
        {
            console.log(error)    
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


module.exports = {
    addBook,
    getAllBooks,
    findBooks,
    deleteBook,
    updateBook
}