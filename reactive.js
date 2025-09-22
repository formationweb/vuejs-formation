function ref(initialValue) {
    return {
        _value: initialValue,
    
        get value() {
            return this._value
        },
    
        set value(str) {
            this._value = str
        }
    }
}