const bcrypt = require('bcryptjs')
const password = 'secret123'

console.log(password)
bcrypt.genSalt(10)
    .then(function(salt){
        console.log(salt)
        bcrypt.hash(password,salt)
            .then(function(hashedPassword){
                console.log(hashedPassword)
            })
    })