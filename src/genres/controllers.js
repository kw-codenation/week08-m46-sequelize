const Genre = require('./model')

const addGenre = async (req, res) =>     
    {
        try 
        {
            console.log(req.body.descr)
            const genre = await Genre.create
            (
                {descr: req.body.descr}
            )

            res.status(201).json({message: genre.descr + ' has been added successfully id: ' + genre.id, genres:genre})
        } 
        catch (error) 
        {
            console.log('addGenre error: ' + error)    
        }
    }

    const getAllGenres = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const genres = await Genre.findAll()

            res.status(201).json({message: 'success (' + genres.length + ') found', genres:genres, count:genres.length})
        } 
        catch (error) 
        {
            console.log('getAllGenres error ' + error)    
        }

    }

    const findGenres = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const genres = await Genre.findAll({where:req.body})

            res.status(201).json({message: 'success ' + genres.length + ' found', genres:genres})
        } 
        catch (error) 
        {
            console.log('findGenres error ' + error)    
        }

    }

    const deleteGenre = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            await Genre.destroy({where:req.body})

            res.status(203).json({message: 'Genre with id: ' + JSON.stringify(req.body.id) + ' successfully deleted'})
        } 
        catch (error) 
        {
            console.log('deleteGenre error ' + error)    
        }
    }

    const deleteAllGenres = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            await Genre.destroy()

            res.status(201).json({message: 'All data on the genres table has been successfully deleted'})
        } 
        catch (error) 
        {
            console.log(error)    
        }
    }

    const updateGenre = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const genre = await Genre.update
                                (req.body.criteria,
                                {where:req.body.where}
                                )

            res.status(200).json({message: 'Update of genre id (' + req.body.where.id + ') using criteria ' + JSON.stringify(req.body.criteria) + ' successful', genre:genre})
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

    const loadGenres = async (req, res) =>     
    {
        try 
        {
            console.log(req.body)
            const genre = await Genre.bulkCreate
            (
                [
                    { "descr": "fantasy"},
                    { "descr": "drama"},
                    { "descr": "adventure"},
                    { "descr": "western"},
                    { "descr": "romance"},
                    { "descr": "science fiction"},
                    { "descr": "mystery"},
                    { "descr": "murder mystery"}
                ]
            )

            res.status(201).json({message:'8 genre discriptions have been added successfully to the genres table', genre:genre})
        } 
        catch (error) 
        {
            console.log(error)    
        }
    }


module.exports = {
    addGenre,
    getAllGenres,
    findGenres,
    deleteGenre,
    deleteAllGenres,
    updateGenre,
    loadGenres
}