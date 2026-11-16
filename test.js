function ref(defaultValue) {
    return {
        _value: defaultValue,
        get value() {
            return this._value
        },
        set value(newNom) {
            console.log('prop modified')
            this._value = newNom 
        }
    }
}


let nom = ref('ana')
let age = ref(18)

nom.value = 'ben'