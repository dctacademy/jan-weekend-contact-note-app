const _ = require('lodash')

const numbers = [10,20,30,10,20]
const name = 'ani'

console.log(_.uniq(numbers))
console.log(_.capitalize(name))

const person = {
    name: 'arjun',
    city: 'bangalore', 
    age: 19
}

console.log(_.pick(person,['name', 'city']))