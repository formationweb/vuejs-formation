// pending
// resolved
// rejected

function lancerDe(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calcul terminé')
            //resolve(Math.random())
            reject(new Error('test'))
        }, ms)
    })
}

/*
lancerDe(1000).then((nb) => {
    console.log(nb)
    return lancerDe(2000)
}).then((nb2) => {
    console.log(nb2)
    return lancerDe(2000)
}).then((nb3) => {
    console.log(nb3)
}).catch((err) => {
    console.log(err)
})
    */

async function foo() {
   try {
    const nb = await lancerDe(1000)
    const nb1 = await lancerDe(1000)
    const nb2 = await lancerDe(1000)
    console.log(nb, nb1, nb2)
   }
   catch (err) {
    console.log('A', err)
    throw err
   }
   // ...
}

foo().then(() => {
    console.log('terminé')
}).catch((err) => {
    console.log('B', err)
})