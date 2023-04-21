const { DataTypes } = require('sequelize')
const connection = require('../db/connection')

const Genre  = connection.define('genre', 
    {descr:{type:DataTypes.STRING}}
)

module.exports = Genre