let userName = {
    _val: '',

    get value() {
        return this._val
    },

    set value(newVal) {
        console.log('valeur a changée')
        // appel d'une fonction, callback
        this._val = newVal
    }
}

console.log(userName.value)
userName.value = 'ben'
console.log(userName.value)