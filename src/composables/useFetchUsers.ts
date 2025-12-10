import type { User } from "@/core/interfaces/User"
import { useUserStore } from "@/store/user"
import axios from "axios"
import { ref } from "vue"

export function useFetchUsers() {
    const userStore = useUserStore()
    const loading = ref(false)
    const error = ref('')

    async function getAll() {
        try {
            loading.value = true
            await userStore.getAll()
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
        getAll,
        loading,
        error
    }
}