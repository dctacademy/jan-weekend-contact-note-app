function api1() {
    return new Promise(function(resolve, reject){
        // const time = Math.round(Math.random() * 1000)
        setTimeout(() => {
            // const number = Math.round(Math.random() * 100)
            if(10 % 2 == 0) {
                resolve(10) 
            } else {
                reject('odd number') 
            }
        }, 3000);
    })
}

function api2() {
    return new Promise(function (resolve, reject) {
        // const time = Math.round(Math.random() * 100)
        setTimeout(() => {
            // const number = Math.round(Math.random() * 100)
            if(11 % 2 == 0) {
                resolve(10) 
            } else {
                reject('odd number')
            }
        }, 4000);
    })
}

// api1().then(function(num){
//     console.log(num)
// }).catch(function(err){
//     console.log(err)
// })      

// api2().then(function (num) {
//     console.log(num)
// }).catch(function (err) {
//     console.log(err)
// }) 

// resolve promises sequentially 

// api1().then(function(num){
//     console.log(num)
//     api2().then(function(num){
//         console.log(num)
//     }).catch(function(err){
//         console.log(err)
//     })
// }).catch(function(err) {
//     console.log(err) 
// })

// 
Promise.all([api1(), api2()]).then(function(values){
    console.log('api1', values[0])
    console.log('api2', values[1])
    console.log('insert to db')
}).catch(function(err){
    console.log(err) 
    console.log('send back to client error message')
})



// api1, api2, api3    values 
//    [api1value, api2value, api3value]

// api3, api1, api2   values 
//     [api3value, api1value, api2value]


// api1 - 2 
// api2 - 1 
// api3 - 0.5 