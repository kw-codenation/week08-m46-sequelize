const { Sequelize } = require("sequelize")

const connection = new Sequelize()

connection.authenticate()

console.log("DB connection is working")

module.exports = connection