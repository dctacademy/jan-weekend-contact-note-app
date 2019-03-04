const express = require('express')
const router = express.Router() 
const { Contact } = require('../models/Contact')

// localhost:3000/contacts
router.get('/', function (req, res) {
    Contact.find()
        .then(function (contacts) {
            res.send(contacts)
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.post('/', function (req, res) {
    const body = req.body // const { body } = req 
    const contact = new Contact(body)
    contact.save()
        .then(function (contact) {
            res.send({
                contact,
                notice: 'successfully created a contact'
            })
        })
        .catch(function (err) {
            res.send(err)
        })
})


// localhost:3000/contacts/:id
router.get('/:id', function (req, res) {
    const id = req.params.id
    Contact.findById(id)
        .then(function (contact) {
            // when you are trying to find the record by the id, if the rec is not found, it returns null, not be understood as promise being rejected
            if (contact) {
                res.send(contact)
            } else {
                res.status('404').send({})
            }
        })
        .catch(function (err) {
            res.send(err)
        })
})


//localhost:3000/contacts/:id
router.delete('/:id', function (req, res) {
    const id = req.params.id
    Contact.findByIdAndDelete(id)
        .then(function (contact) {
            if (contact) {
                res.send({
                    contact,
                    notice: 'successfully removed the contact'
                })
            } else {
                res.status('404').send({})
            }
        })
        .catch(function (err) {
            res.send(err)
        })
})

router.put('/:id', function (req, res) {
    const id = req.params.id
    const body = req.body
    Contact.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then(function (contact) {
            if (contact) {
                res.send({
                    contact,
                    notice: 'successfully udated the contact'
                })
            } else {
                res.status('404').send({})
            }
        })
        .catch(function (err) {
            res.send(err)
        })
})

module.exports = {
    contactsRouter: router  
}