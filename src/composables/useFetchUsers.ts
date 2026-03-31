import { inject, ref } from "vue"
import type { User } from "../interfaces/user"
import type { UserService } from "../services/users"

export function useFetchUsers() {
    const userService = inject<UserService>('userService')
    const users = ref<User[]>([])
    const loading = ref(true)
    const error = ref('')

    async function fetchUsers() {
        try {
            users.value = (await userService?.getUsers() ?? [])
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
        fetchUsers,
        loading
    }
}