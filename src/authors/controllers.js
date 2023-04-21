const Author = require('./model')

const addAuthor = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const author = await Author.create
            (
                {name: req.body.name
                ,bname: req.body.bname
                ,bdate: req.body.bdate
                ,bplace: req.body.bplace
                }
            )

            res.status(201).json({message: author.name +' has been added successfully id: ' + author.id, authors:author})
        } 
        catch (error) 
        {
            console.log('addAuthor error: ' + error)    
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
            console.log('addAllAuthors error ' + error)  
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
            console.log(req.body.id)
            await Author.destroy({where:req.body})

            res.status(203).json({message: 'author with id ' + JSON.stringify(req.body.id) + ' successfully deleted'})
        } 
        catch (error) 
        {
            console.log('deleteAuthor error: ' + error)    
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
    const loadAuthors = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const author = await Author.bulkCreate
            (
                [
                    {
                      "name":"Agatha Christie",
                      "bname":"Agatha Mary Clarissa Miller",
                      "bdate":"15th September 1890",
                      "bplace":"Torquay, Devon, England"
                    },
                    {
                      "name":"Jules Verne",
                      "bname":"Jules Gabriel Verne",
                      "bdate":"8th February 1828",
                      "bplace":"Nantes, Brittany, France"
                    },
                    {
                      "name":"Dorothy L. Sayers",
                      "bname":"Dorothy Leigh Sayers",
                      "bdate":"13th June 1893",
                      "bplace":"Oxford, England"
                    },
                    {
                      "name":"Alexandre Dumas",
                      "bname":"Dumas Davy de la Pailleterie",
                      "bdate":"24th July 1802",
                      "bplace":"Villers-Cotterêts, Picardy, France"
                    },
                    {
                        "name":"Charlotte Brontë",
                        "bname":"Charlotte Brontë",
                        "bdate":"21st April 1816",
                        "bplace":"Haworth, Yorkshire, England"
                    },
                    {
                        "name":"Arthur Conan Doyle",
                        "bname":"Arthur Ignatius Conan Doyle",
                        "bdate":"22nd May 1859",
                        "bplace":"Crowborough, Sussex, England"
                    },
                    {
                        "name":"HG Wells",
                        "bname":"Herbert George Wells",
                        "bdate":"21st September 1866",
                        "bplace":"Bromley, Kent, England"
                    },
                    {
                        "name":"Jane Austen",
                        "bname":"Jane Austen",
                        "bdate":"16th December 1775",
                        "bplace":"Steventon, Hampshire, England"
                    },
                    {
                        "name":"Daphne du Maurier",
                        "bname":"Daphne du Maurier",
                        "bdate":"13th May 1907",
                        "bplace":"London, England"
                    }
                ]
            )

            res.status(201).json({message: '9 authors has been added successfully id: ' + author.id, author:author})
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
    updateAuthor,
    loadAuthors
}