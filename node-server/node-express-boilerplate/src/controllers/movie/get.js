const { Produtos } = require('../../response/models')
const { getAll } = require('../../services/produtos')

// module.exports = async function (req, res) {
//   console.log("recebi inout");
//   return res.send([
//     {nome: "Banana", preco:1},
//     {nome: "Cafe", preco: 5},
//     {nome: "colher", preco: 13},
//     {nome: "copo", preco: 8},
//     {nome: "Relogio", preco: 2},
//     {nome: "sucrilhos", preco: 7},
//     {nome: "leite", preco: 2},
//     {nome: "Doce", preco: 5.4}]);
// }


module.exports = async function (req, res) {
  const { limit, offset, sort, order } = req.query
  let { data } = await getAll(limit, offset, sort, order)
  res.send(data)
}