// const user = {
//     name: 'test',
//     address: {
//         city: 'Paris'
//     }
// }

// let userProxy = new Proxy(user, {
//     get(obj, prop) {
//         return obj[prop]
//     },
//     set(obj, prop, val) {
//         obj[prop] = val
//         return true
//     }
// })

// userProxy = {
//     name: 'ben',
//     address: '...'
// }


let age = ref(42)

let isMinor = computed(() => age.value < 18)

console.log(isMinor.value) // false

age.value = 15

console.log(isMinor.value) // true