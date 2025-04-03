// let obj = {
//     _value: {
//         name: 'ana',
//         age: 18
//     },
//     get value() {
//         return this._value
//     },
//     set value(val) {
//         console.log('render')
//         this._value = val
//     }
// }

const obj = {
    name: 'ben',
    age: 19,
    address: {
        city: 'Paris'
    }
}

let objProxy = new Proxy(obj, {
    get(obj, prop) {
        return obj[prop]
    },
    set(obj, prop, val) {
        if (val > 0 && val < 100 && prop == 'age') {
            obj[prop] = val
        }
        return true
    }
})

objProxy = {
    name: 'ana',
    age: 18,
    address: {
        city: 'Paris'
    }
}

objProxy.age = 10000
console.log(objProxy.age)