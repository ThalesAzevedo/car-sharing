require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')


console.log(process.env.APP_NAME)

const app = express()

mongoose.connect(process.env.DB_MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT, ()=>{console.log('Server ON - localhost:3333')})
