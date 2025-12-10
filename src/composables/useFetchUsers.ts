import type { User } from "@/core/interfaces/User"
import type { UserService } from "@/services/user"
import { useUserStore } from "@/store/user"
import axios from "axios"
import { inject, ref } from "vue"

export function useFetchUsers() {
    const userStore = useUserStore()
    const loading = ref(false)
    const error = ref('')
    const userService = inject<UserService>('userService')

    async function getAll() {
        try {
            loading.value = true
             userStore.getAll(await userService?.getUsers() ?? [])
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