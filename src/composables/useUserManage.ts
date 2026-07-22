import { inject, type Ref } from "vue";
import { UserServiceKey } from "../keys";
import { UserService } from "../core/services/user";
import type { User } from "../core/interfaces/user";

export function useUserManage(users: Ref<User[]>) {
    const userService = inject<UserService>(UserServiceKey)

    async function deleteUser(id: number) {
        await userService?.deleteUser(id)
        users.value = users.value.filter(user => user.id != id)
    }

    return {
        deleteUser
    }
}