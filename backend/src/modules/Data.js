const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const DataSchema = new mongoose.Schema({
    _id: String,
    route: [{
        origin: {
            type: PointSchema,
            index: '2dsphere'
        },
        destiny: {
            type: PointSchema,
            index: '2dsphere'
        },
        hour: String
    }],

})

module.exports = mongoose.model("Data", DataSchema)