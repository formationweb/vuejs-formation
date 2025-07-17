// let user = {
//     name: 'ana',
//     age: 18,
//     address: {
//         city: 'lyon'
//     }
// }


// let userProxy = new Proxy(user, {
//     get(obj, prop) {
//         return obj[prop]
//     },
//     set(obj, prop, value) {
//         obj[prop] = value
//         return true
//     }
// })

// userProxy = {
//     name: 'ben',
//     age: 19
// }

// userProxy.age = 20

function foo(obj2) {
    obj2 = 'ben'
}

const obj = 'ana'
foo(obj)
console.log(obj)