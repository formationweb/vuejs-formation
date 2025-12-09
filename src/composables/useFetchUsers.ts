import type { User } from "@/core/interfaces/User"
import axios from "axios"
import { ref } from "vue"

export function useFetchUsers() {
    const users = ref<User[]>([])
    const loading = ref(false)
    const error = ref('')

    async function getAll() {
        try {
            loading.value = true
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            users.value = res.data
        }
        catch (err: unknown) {
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