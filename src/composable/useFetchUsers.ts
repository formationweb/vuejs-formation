import axios from "axios"
import { User } from "../interfaces/User"
import { ref } from "vue"

export function useFetchUsers() {
    const users = ref<User[]>([])
    const loading = ref(false)

    async function getAll() {
        try {
            loading.value = true
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            //await new Promise(resolve => setTimeout(resolve, 2000))
            users.value = res.data
        }
        catch (err) {
            console.log(err)
        }
        finally {
            loading.value = false
        }
    }

    return {
        getAll,
        users,
        loading
    }
}