const express = require('express')
const router = express.Router() 

const { contactsRouter } = require('../app/controllers/ContactsController')
const { usersRouter } = require('../app/controllers/UsersController')

router.use('/contacts', contactsRouter)
router.use('/users', usersRouter)

module.exports = {
    routes: router 
}