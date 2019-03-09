const mongoose = require('mongoose')

const Schema = mongoose.Schema // const { Schema } = mongoose
// telling a document what fields it should have , like what properties an object should have
const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

// model based on the schmea - a model will become our object constructor function
// model names must be singular and must follow PascalCase
const Contact = mongoose.model('Contact', contactSchema) 

module.exports = {
    Contact
}