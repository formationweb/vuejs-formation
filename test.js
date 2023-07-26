/*class MyComponent {
    _username = ''

    get username() {
        return this._username
    }

    set username(str) {
        console.log('modifié')
        this._username = str
    }
}

const component = new MyComponent()
component.username = 'ana'
console.log(component.username)*/

const user = {
    name: 'ana',
    email: 'ana@gmail.com'
}

const userProxy = new Proxy(user, {
    set(obj, prop, value) {
        console.log(prop, value)
    }
})

userProxy.name = 'ben'

const { name, email } = user