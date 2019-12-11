const movieController = require('../controllers/movie')

module.exports = {
  produtos: [
    {
      methods: 'GET',
      path: '/',
      controller: movieController.get
    }
  ]
}
