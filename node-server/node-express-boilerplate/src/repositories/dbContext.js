const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const dbUtil = require('../utils/db')

const sequelize = new Sequelize(dbConfig["local"].database, dbConfig["local"].username, dbConfig["local"].password, {
  host: dbConfig["local"].host,
  dialect: dbConfig["local"].dialect,
  logging: process.env.DB_LOGGING ? console.log : console.log
})
const op = Sequelize.Op

module.exports = {
  sequelize,
  Sequelize,
  op,
  dbUtil
}
