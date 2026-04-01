import { inject, reactive, ref } from "vue"
import type { User } from "../interfaces/user"
import type { UserService } from "../services/users"
import { useUserStore } from "../store/user"

export function useFetchUsers() {
    const userService = inject<UserService>('userService')
    const userStore = useUserStore()
    const loading = ref(true)
    const error = ref('')

    async function fetchUsers() {
        try {
            const users = (await userService?.getUsers() ?? [])
            userStore.setUsers(users)
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
        fetchUsers,
        loading
    }
}