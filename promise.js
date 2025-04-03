import axios from 'axios'

async function getUsers() {
    return (await axios.get('https://jsonplaceholder.typicode.com/user')).data
}

try {
    const users = await getUsers()
    // ....
}
catch (err) {
    console.log('error')
}