new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello')
    }, 1000)
}).then((str) => {
    console.log(str)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello2')
        }, 2000)
    })
}).then((str2) => {
    console.log(str2)
}).catch((err) => {
    console.log(err)
})