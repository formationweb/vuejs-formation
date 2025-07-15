let age = {
    _value: 0,

    get value() {
        return this._value
    },

    set value(newVal) {
        console.log('un changement !')
        this._value = newVal
    }
}

console.log(age.value)
age.value = 30
console.log(age.value)