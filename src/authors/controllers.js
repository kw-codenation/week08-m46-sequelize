const Author = require('./model')

const addAuthor = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const author = await Author.create
            (
                {name: req.body.name
                ,bdate: req.body.bdate
                ,bplace: req.body.bplace
                }
            )

            res.status(201).json({message: author.name +' has been added successfully id: ' + author.id, author:author})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    const getAllAuthors = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const authors = await Author.findAll()

            res.status(201).json({message: 'success (' + authors.length + ') found', authors:authors})
        } 
        catch (error) 
        {
            console.log(error)  
        }

    }

    const findAuthors = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const authors = await Author.findAll({where:req.body})

            res.status(201).json({message: 'success ' + authors.length + ' found', authors:authors})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    const deleteAuthor = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            await Author.destroy({where:req.body})

            res.status(203).json({message: 'author using criteria ' + JSON.stringify(req.body) + ' successfully deleted'})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    const updateAuthor = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const author = await Author.update
                                (req.body.criteria,
                                {where:req.body.where}
                                )

            res.status(200).json({message: 'Update of author id (' + req.body.where.id + ') using criteria ' + JSON.stringify(req.body.criteria) + ' successful', author:author})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }


module.exports = {
    addAuthor,
    getAllAuthors,
    findAuthors,
    deleteAuthor,
    updateAuthor
}