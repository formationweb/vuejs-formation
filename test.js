class MyComponent {
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
console.log(component.username)