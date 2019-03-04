const mongoose = require('mongoose')

// configure mongoose to use global promises
mongoose.Promise = global.Promise

// establish a database connection
mongoose.connect('mongodb://localhost:27017/my-apps-jan', { useNewUrlParser: true, useCreateIndex: true})
    .then(function () {
        console.log('connected to db')
    })
    .catch(function () {
        console.log('error connecting to db')
    })

module.exports = {
    mongoose
}