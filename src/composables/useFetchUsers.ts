import { ref, type Ref } from "vue"
import type { User } from "../interfaces/User"
import axios from "axios"

export function useFetchUsers() {
    const users: Ref<User[]> = ref([])
    const loading = ref(true)
    const error = ref<null | unknown>(null)

    async function getAll() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            users.value = res.data
        }
        catch (err) {
            error.value = err
            throw err
        }
        finally {
            loading.value = false
        }
    }
    
    return {
        users,
        loading,
        getAll,
        error
    }
}