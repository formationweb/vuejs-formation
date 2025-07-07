const user = {
    name: 'ben',
    age: 19,
    address: {
        city: 'paris'
    }
}

let userProxy = new Proxy(user, {
    get(obj, prop) {
        return obj[prop]
    },
    set(obj, prop, val) {
        console.log('test')
        obj[prop] = val
        return true
    }
})

userProxy = {
    name: 'ana',
    age: 25
}

userProxy.age = 18