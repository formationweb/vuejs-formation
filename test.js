const user = {
  name: "ana",
  age: 42,
};

let userProxy = new Proxy(user, {
    get(obj, prop) {
        return obj[prop] 
    },
    set(obj, prop, val) {
        obj[prop] = val + 'fefefeefe'
        return true
    }
})

userProxy.name = 'test'