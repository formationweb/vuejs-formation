const user = {
    name: 'test',
    address: {
        city: 'Paris'
    }
}

let userProxy = new Proxy(user, {
    get(obj, prop) {
        return obj[prop]
    },
    set(obj, prop, val) {
        obj[prop] = val
        return true
    }
})

userProxy = {
    name: 'ben',
    address: '...'
}
