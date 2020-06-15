const {Router} = require('express')
const usersController = require('./modules/controllers/usersController')

const routes = Router()

routes.get("/", usersController.index)

routes.post("/", usersController.store)

routes.put("/", usersController.update)

routes.delete("/", usersController.destroy)



module.exports = routes
