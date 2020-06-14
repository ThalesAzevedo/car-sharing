require('dotenv/config');

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')


console.log(process.env.APP_NAME)

const app = express()

mongoose.connect('mongodb+srv://thtestes:thtestes@cluster0-ywonf.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})

app.use(express.json())

app.use(routes)

app.listen('3333', ()=>{console.log('Server ON - localhost:3333')})