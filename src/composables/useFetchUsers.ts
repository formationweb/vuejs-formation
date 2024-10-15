import { inject, ref, type Ref } from "vue";
import type { UserService } from "../services/UserService";
import type { User } from "../interfaces/User";

type FetchUsers = {
    loading: Ref<boolean>
    getAll: () => Promise<User[]>
}

export function useFetchUsers(): FetchUsers {
    const loading = ref(false)
    const userService = inject<UserService>('userService') as UserService

    async function getAll() {
        try {
            loading.value = true
            const users = await userService.getAll()
            return users
        }
        catch (err) {
            throw err
        }
        finally {
            loading.value = false
        }
    }

    return {
        loading,
        getAll
    }
}