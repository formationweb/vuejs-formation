import { ref, type Ref } from "vue"
import type { User } from "../interfaces/User"
import axios from "axios"
import { useUserStore } from "../store/user"

export function useFetchUsers() {
    const userStore = useUserStore()
    const loading = ref(true)
    const error = ref<null | unknown>(null)

    async function getAll() {
        try {
           loading.value = true
           await userStore.getAll()
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
        loading,
        getAll,
        error
    }
}