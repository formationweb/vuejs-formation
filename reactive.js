let obj = {
    _value: {
        name: 'ana',
        age: 18
    },
    get value() {
        return this._value
    },
    set value(val) {
        console.log('render')
        this._value = val
    }
}

obj.value = {
    name: 'ben',
    age: 19
}

console.log(obj.value)