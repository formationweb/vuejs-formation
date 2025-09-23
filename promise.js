function lancerDe(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calcul terminé')
            //resolve(Math.random())
            reject(new Error('erreur'))
        }, ms)
    })
}

// pending
// resolved / rejected

// lancerDe(1000).then((nb1) => {
//     console.log(nb1)
//     return lancerDe(2000)
// }).then((nb2) => {
//     console.log(nb2)
//     return lancerDe(1000)
// }).then((nb3) => {
//     console.log(nb3)
// }).catch((err) => {
//     console.log(err)
// })

async function foo() {
    try {
        const nb1 = await lancerDe(1000)
        const nb2 = await lancerDe(1000)
        const nb3 = await lancerDe(1000)
        console.log(nb1, nb2, nb3)
    }
    catch (err) {
        console.log('A', err)
        throw err
    }
}

foo().then(() => {
    console.log('terminé')
}).catch((err) => {
    console.log('B', err)
})