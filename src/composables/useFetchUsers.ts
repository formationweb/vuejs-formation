import axios from "axios"
import { ref } from "vue"
import type { User } from "../interfaces/User"

export function useFetchUsers() {
    const users = ref<User[]>([])
    const loading = ref(true)
    const error = ref('')

    async function getAll() {
       try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        users.value = res.data
       }
       catch (err) {
            if (err && typeof err == 'object' && 'message' in err) {
                error.value = err.message as string
            }
       }
       finally {
        loading.value = false
       }
    }

    return {
        users,
        getAll,
        loading,
        error
    }
}