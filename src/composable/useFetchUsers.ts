import type { User } from "@/interfaces/User"
import axios from "axios"
import { ref } from "vue"

export function useFetchUsers() {
    const users = ref<User[]>([])
    const loading = ref(false)

    async function getAll() {
        try {
            loading.value = true
            const response = await axios.get(import.meta.env.VITE_API_URL + '/users')
            users.value = response.data
        }
        catch (err) {
            console.log(err)
        }
        finally {
            loading.value = false
        }
    }

    return {
        users,
        loading,
        getAll
    }
}