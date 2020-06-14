const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    birthday: Date,
    password: String,
})

module.exports = mongoose.model("User", UserSchema)