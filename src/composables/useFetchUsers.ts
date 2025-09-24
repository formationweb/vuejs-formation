import axios from "axios"
import { ref } from "vue"
import type { User } from "../interfaces/User"
import { useUserStore } from "../store/user"

export function useFetchUsers() {
    const userStore = useUserStore()
    const loading = ref(true)
    const error = ref('')

    async function getAll() {
       try {
        await userStore.getAll()
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
        getAll,
        loading,
        error
    }
}