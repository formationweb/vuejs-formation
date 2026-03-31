function lancerDe(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('calcul terminé')
            //resolve(Math.random())
            reject(new Error('err'))
        }, ms)
    })
}

// lancerDe(1000).then((nb1) => {
//     console.log(nb1)
//     return lancerDe(1000)
// }).then((nb2) => {
//     console.log(nb2)
// }).catch(err => {
//     console.log(err)
// })


async function foo() {
    try {
        const nb1 = await lancerDe(1000)
        const nb2 = await lancerDe(1000)
        console.log(nb1, nb2)
    }
    catch (err) {
        console.log(err)
        throw err;
    }
}

foo().then(() => {
    console.log('terminé')
}).catch(err => console.log(err))