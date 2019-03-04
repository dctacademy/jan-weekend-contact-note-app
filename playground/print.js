// const city = require('./values').city 
// const person = require('./values').person

const { city, person, add } = require('./values')
const ipAddress = require('./ipconfig')

console.log('city',city)
console.log('person',person)

console.log('add', add(10,20))
console.log('ip address', ipAddress)