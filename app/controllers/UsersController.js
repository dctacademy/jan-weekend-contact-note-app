const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router() 
const { User } = require('../models/User')

// localhost:3000/users/register
router.post('/register', function(req, res){
    const body = req.body 
    const user = new User(body) 
    user.save()
        .then(function(user){
            res.send({
                user, 
                notice: 'Successfully registered'
            })
        })
        .catch(function(err){
            res.send(err)
        })
})

router.post('/login', function(req, res){
    const body = req.body 
    let currentUser  
    // User.findByEmail(body.email) 
    User.findOne({ email: body.email })
        .then(function(user){
            if(!user) { // if user with email not found 
                res.status('404').send('invalid email / password ')
            }
            currentUser = user // set this up so that, we can use it in the next then method
            return bcrypt.compare(body.password, user.password)
        })
        .then(function(result){
            if(result){
                res.send(currentUser)
            } else {
                res.send('invalid email / password ')
            }
        })
        .catch(function(err){
            res.send(err)
        })
})


module.exports = {
    usersRouter: router
}