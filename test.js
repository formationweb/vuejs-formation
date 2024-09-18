// let nom = {
//     _value: '',
//     get value() {
//         return this._value
//     },
//     set value(val) {
//         console.log('render')
//         this._value = val
//     }
// }

// nom.value = 'ana'
// console.log(nom.value)

let user = {
    name: 'ana',
    age: 42
}

let userProxy = new Proxy(user, {
    get(obj, prop) {
        return obj[prop]
    },
    set(obj, prop, val) {
        //console.log('render')
        obj[prop] = val + 'dzzzfz'
        return true
    }
})

userProxy.name = 'ben'
userProxy = {
    name: 'test',
    age: 50
}
console.log(userProxy.name)



