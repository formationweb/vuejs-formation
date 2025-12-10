// function ref(defaultValue) {
//     return {
//         _value: defaultValue,
    
//         get value() {
//             return this._value
//         },
    
//         set value(val) {
//            // mettre à le dom
//            console.log('mettre à jour le dom')
//             this._value = val
//         }
//     }
// }

// const nom = ref('ana')
// const age = ref(20)


function reactive(user) {
    return new Proxy(user, {
        get(obj, prop) {
            return obj[prop]
        },
        set(obj, prop, val) {
            console.log('mettre à jour le dom')
            obj[prop] = val
            return true
        }
    })
}

let user = reactive({
    age: 18,
    name: 'ana'
})

user = {
    ...
}