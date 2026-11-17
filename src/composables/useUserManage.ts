import { inject, type Ref } from "vue";
import type { UserService } from "../services/users";
import { USER_SERVICE_TOKEN } from "../tokens";
import type { User } from "../core/interfaces/user";

export function useUserManage(users: Ref<User[]>) {
    const userService = inject<UserService>(USER_SERVICE_TOKEN)

    async function deleteUser(id: number) {
        await userService?.deleteUser(id)
        users.value = users.value.filter(user => user.id != id)
    }

    return {
        deleteUser
    }
}