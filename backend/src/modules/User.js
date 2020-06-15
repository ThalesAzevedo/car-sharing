const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    n_id: String,
    name: String,
    avatar_url: String,

})

module.exports = mongoose.model("User", UserSchema)
