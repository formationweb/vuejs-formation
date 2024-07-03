class User {
    _name = 'ana'

    get name() {
        return this._name
    }

    set name(val) {
        if (val.length == 0) {
            return
        }
        this._name = val
    }
}

const user = new User()
user.name = ''
console.log(user.name)