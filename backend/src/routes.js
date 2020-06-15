const {Router} = require('express')
const usersController = require('./modules/controllers/usersController')

const routes = Router()

routes.get('/users', usersController.index)

routes.get('/users/:n_id', usersController.find)

routes.post('/login', usersController.store)

routes.put('/users/:n_id', usersController.update)

routes.delete('/users/:n_id', usersController.destroy)

module.exports = routes
