const express = require('express')
const app = express() 

const router = express.Router()

console.log(Object.keys(app).length)

console.log(Object.keys(router).length)