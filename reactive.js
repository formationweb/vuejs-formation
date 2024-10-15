// let obj = {
//     _value: {
//         name: 'ana',
//         age: 18
//     },
//     get value() {
//         return this._value
//     },
//     set value(val) {
//         render()
//         this._value = val
//     }
// }

// obj.value = {
//     name: 'ben',
//     age: 20
// }

let obj = {
    name: 'ana',
    age: 18
}

let objProxy = new Proxy(obj, {
    get(obj, prop) {
        return obj[prop]
    },
    set(obj, prop, val) {
        obj[prop] = val + 's'
        return true
    }
})

// objProxy = {
//     name: 'ben',
//     age: 20
// }

objProxy.name = 'jim'
console.log(objProxy.name)