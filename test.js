let obj = {
    nom: 'ana'
}

function test(obj2) {
    obj2.nom = 'ben'
}

test(obj)
console.log(obj)