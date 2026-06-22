function ref(defaultValue) {
    return {
        _value: defaultValue,
    
        get value() {
            return this._value
        },
    
        set value(newValue) {
            console.log('render')
            this._value = newValue
        }
    }
}

let name = ref('')
let age = ref(18)

name.value = 'ana'
age.value = 15

