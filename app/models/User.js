const mongoose = require('mongoose')
// npm install --save bcryptjs 
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 5,
        unique: true 
    }, 
    password: {
        type: String, 
        required: true, 
        minlength: 8,
        maxlength: 128
    },
    email: {
        type: String, 
        required: true, 
        unique: true 
    },
    createdAt: {
        type: Date, 
        default: Date.now 
    }
})

// Pre Hook - Mongoose Middleware // es5 function
userSchema.pre('save', function(next){
    const user = this 
    if(user.isNew) {
        bcrypt.genSalt(10)
            .then(function(salt){
                bcrypt.hash(user.password, salt)
                    .then(function(encryptedPassword){
                        user.password = encryptedPassword
                        next()
                    })
            })
    } else {
        next()
    }
})

// userSchema.methods.checkPassword = function(password){
//     const user = this 
//     return bcrypt.compare(password, user.password)
// }

// userSchema.methods.methodName 

// userSchema.statics.findByCredentials = function(email, password){
//     const User = this 
//     return User.findOne({ email: email })
//         .then(function(user){
//             // console.log(user)
//             if(user) {
//                 // return Promise.resolve(user) 
//                 // check users password 
//                 console.log(user.password)
//                 return bcrypt.compare(password, user.password)
//                     .then(function(result){
//                         if(result) {
//                             return Promise.resolve(user) 
//                             // return new Promise(function (resolve, reject) {
//                             //     resolve(user)
//                             // })
//                         } else {
//                             return Promise.reject('invalid email / password')
//                             // return new Promise(function(resolve, reject){
//                             //     reject('invalid email / password')
//                             // })
//                         }
//                     })
//             } else {
//                 return Promise.reject('email not found')
//                 // return new Promise(function(resolve, reject){
//                 //     reject('invalid email / password')
//                 // })
//             }
//         })
// }

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}