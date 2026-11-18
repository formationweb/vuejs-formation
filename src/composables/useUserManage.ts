import { inject, type Ref } from "vue";
import type { UserPayload, UserService } from "../services/users";
import { USER_SERVICE_TOKEN } from "../tokens";
import type { User } from "../core/interfaces/user";
import { ref } from "vue";

export function useUserManage(users: Ref<User[]>) {
    const userService = inject<UserService>(USER_SERVICE_TOKEN)
    const loadingCreate = ref(false)

    async function deleteUser(id: number) {
        await userService?.deleteUser(id)
        users.value = users.value.filter(user => user.id != id)
    }

    async function createUser(payload: UserPayload) {
        loadingCreate.value = true
        const user = await userService?.createUser(payload)
        if (user) {
            users.value = [...users.value, user]
        }
        loadingCreate.value = false
    }

    return {
        deleteUser,
        createUser,
        loadingCreate
    }
}