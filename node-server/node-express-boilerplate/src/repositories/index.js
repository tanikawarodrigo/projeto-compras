const produtos = require('./produtos')
const transaction = require('./Transaction')
const {Op, QueryTypes} = require('./dbContext')

module.exports = {
  produtos,
  transaction,
  Op,
  QueryTypes
}
