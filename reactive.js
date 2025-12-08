function ref(defaultValue) {
    return {
        _value: defaultValue,
    
        get value() {
            return this._value
        },
    
        set value(val) {
           // mettre à le dom
           console.log('mettre à jour le dom')
            this._value = val
        }
    }
}

const nom = ref('ana')
nom.value = 'anadzefrgthyjuilmùsazdefgrthyjui'

watchEffect(() => {
    console.log(nom.value)
})