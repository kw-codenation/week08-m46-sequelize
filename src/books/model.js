const { DataTypes } = require('sequelize')
const connection = require('../db/connection')

const Book  = connection.define('book', 
    {title:
        {type:DataTypes.STRING
        ,allowNull: false
        ,unique: true
        }
    }
)

module.exports = Book