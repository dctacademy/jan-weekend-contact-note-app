const bcrypt = require('bcryptjs')

const hashedPassword = '$2a$10$j7qaGTk0/79l4d3WQo8voucq/lz55iyVUj97Iky1Bx.BEF65sI3RC'

const loginPassword = 'secret'

// bcrypt.compare(loginPassword, hashedPassword)
//     .then(function(result){
//         console.log(result)
//     })

const saltUsed = hashedPassword.slice(0,29)
console.log(saltUsed)

bcrypt.hash(loginPassword, saltUsed)
    .then(function(hashed1){
        if(hashed1 == hashedPassword) {
            console.log(true)
        } else {
            console.log(false) 
        }
    })