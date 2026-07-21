async function getUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err)
    }
    finally {

    }
}

const users = await getUsers()
console.log(users)