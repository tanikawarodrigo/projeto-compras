const {sequelize, Sequelize, dbUtil} = require('./dbContext')

const Produtos = sequelize.define('produtos', {
  'nome': {
    'type': Sequelize.STRING(7),
    'allowNull': true,
    'field': 'nome'
  },
  'preco': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'field': 'preco'
  },
  'quantidade': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'field': 'quantidade'
  }
}, {
  'tableName': 'produtos',
  'freezeTableName': true,
  'underscored': false,  
  'timestamps': false,
})

Produtos.customQuery = async function (params) {
  let sql = 'SELECT * from produtos'
  let result = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
  return result;
}

module.exports = Produtos
