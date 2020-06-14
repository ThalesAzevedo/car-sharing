const User = require('../User')
const Data = require('../Data')

module.exports= {
    async index(req, resp) {
        users = await User.find()
        return resp.json(users)
    },

    async store(req, resp) {
        console.log(req.body)
        const {name, birthday, username, password } = req.body
        
        user = await User.create({
            name,
            birthday,
            username,
            password,
        })

        // data = await Data.create({
        // _id: user._id,
        // route: [{
        //     origin: {},
        //     destiny: {},
        //     hour:
        // })

        return resp.json(user)
    },

    async update(req, resp) {
        
    },

    async destroy(req, resp) {
        
    },

}