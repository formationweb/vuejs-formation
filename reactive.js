function ref(defaultValue) {
    return {
        _value: defaultValue,
        get value() {
            return this._value
        },
        set value(newValue) {
            console.log('value modified')
            this._value = newValue
        }
    }
}

let nom = ref('ana')
let age = ref(12)

nom.value = 'ana'
age.value = 99