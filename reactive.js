function reactive(value) {
    return new Proxy(value, {
        get(obj, prop) {
            return obj[prop]
        },
        set(obj, prop, val) {
            console.log('render')
            obj[prop] = val
            return true
        }
    })
}


const user = reactive({
    age: 18,
    address: {
        city: 'Paris'
    }
})

user.age = 20