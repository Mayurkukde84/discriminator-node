require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT

app.use(express.json())
connectDB()

app.use('/',require('./router/root'))
app.use('/agent',require('./router/agentRoute'))

mongoose.connection.once('open',()=>{
    console.log('mongodb is connected')
    app.listen(PORT,()=>{
       console.log(`server is running on ${PORT}`)
    })
})

mongoose.connection.on('err',()=>{
    console.log(err)
})

