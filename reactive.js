let nom = {
    _value: 'ana',
    get value() {
        return this._value
    },
    set value(val) {
        render()
        this._value = val
    }
}

nom.value = 'ben'
console.log(nom.value)