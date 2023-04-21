const { DataTypes } = require('sequelize')
const connection = require('../db/connection')

const Author = connection.define('author', 
    {name:
        {type:DataTypes.STRING
            ,allowNull: false
            ,unique: true
        }
    ,bname:
        {type:DataTypes.STRING}
    ,bdate:
        {type:DataTypes.STRING}
    ,bplace:
        {type:DataTypes.STRING}
    }
)

module.exports = Author