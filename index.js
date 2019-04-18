const express = require('express')
// npm install --save cors
const cors = require('cors')
const { mongoose } = require('./config/database')
const { routes } = require('./config/routes')

const app = express() 
const port = 3005

// configure express to use json data 
app.use(express.json())

// 
app.use(cors())

// route matching 
app.use('/', routes )


app.listen(port, function(){
    console.log('listening on port', port)
})