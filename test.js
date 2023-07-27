[1, 2, 3].findIndex(item => item == 2) // 1
[{ name: 'sam'}, { name: 'jim'}].findIndex(item => item.name == 'jim') // 1

[1, 2, 3].splice(index, nb)
[1, 2, 3].splice(1, 1) // [1, 3]
[1, 2, 3].splice(0, 2) // [3]