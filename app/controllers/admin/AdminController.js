const express = require('express')
const _ = require('lodash')
const router = express.Router() 

const { Contact } = require('../../models/Contact')
const { User } = require('../../models/User')
const { authenticateUser } = require('../../middlewares/authentication')
const { authorizeUser } = require('../../middlewares/authorization')


// localhost:3000/admin/contacts 
router.get('/contacts', authenticateUser, authorizeUser, function(req, res){
    Contact.find()
        .then(function(contacts){
            res.send(contacts)
        })
        .catch(function(err){
            res.send(err)
        })
})

// localhost:3000/admin/users 
// list users in the application 

// POST localhost:3000/admin/users
// provide functionality for adding a new user for the admin - he can set the role either as an admin or a user 
// _.pick(req.body, ['username', 'password','email', 'roles'])
// 

// PUT localhost:3000/admin/users/:id 
// create a new field called as allowAccess for the user
// set the default to be true 
// through this route an admin can update the allowAccess to either true or false 
// make changes in the authenticateUser function, such that only users whose allowAccess is true is able to continue using the application


router.put('/users/:id', authenticateUser, authorizeUser, function(req, res){   
    const id = req.params.id 
    const body = _.pick(req.body, ['allowAccess', 'username'])
    User.findOneAndUpdate({ _id: id }, body, { new: true })
        .then(function(user){
            res.send(user) 
        })
        .catch(function(err) {
            res.send(err) 
        })
})

module.exports = {
    adminRouter: router
}