let obj = {
    name: 'ana'
}

function foo(myObj) {
    myObj.name = 'ben'
}

foo(obj)
console.log(obj)