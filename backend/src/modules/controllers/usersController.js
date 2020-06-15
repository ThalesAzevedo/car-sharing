const User = require('../User')
//const Data = require('../Data')
require('../User')

module.exports= {
  async index(req, resp) {
    const users = await User.find()
    return resp.json(users)
  },

  async find(req, resp) {
    console.log('Searching for... ' + req.params.n_id)
    const user = await User.findOne(req.params)

    if (user){
      return resp.status(200).json(user)
    }
    else {
      return resp.status(404).json('User not found')
    }

  },

  async store(req, resp) {
    const {n_id, name, avatar_url } = req.body

    const user = await User.findOne({n_id})

    if (user){
      console.log('User '+n_id+' already exists')
      return resp.status(200).json('User already exists')
    }
    else {
      const user = await User.create({
        n_id,
        name,
        avatar_url,
      })
      console.log('User '+n_id+' was created')
      return resp.status(200).json(user)
    }
  },

  async update(req, resp) {
    const condition = {n_id: req.params.n_id}

    const user =  await User.findOneAndUpdate(condition, req.body)

    if (user) {
      console.log('User ' + req.params.n_id +  ' was updated')
      return resp.status(200).json('User ' + req.params.n_id +  ' was updated')
    }
    else {
      console.log('Error: User ' + req.params.n_id +  ' not found')
      return resp.status(404).json('Error: User not found')
    }

  },

  async destroy(req, resp) {
    const user = await User.findOneAndDelete(req.params)

    if (user) {
      console.log('User ' + req.params.n_id +  ' was deleted')
      return resp.status(200).json('User ' + req.params.n_id +  ' was deleted')
    }
    else {
      console.log('Error: User ' + req.params.n_id +  ' not found')
      return resp.status(404).json('Error: User not found')
    }
  },

}
