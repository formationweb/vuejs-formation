import { inject, ref, type Ref } from "vue";
import { UserServiceKey } from "../keys";
import { UserService, type UserCreatePayload } from "../core/services/user";
import type { User } from "../core/interfaces/user";

export function useUserManage(users: Ref<User[]>) {
    const userService = inject<UserService>(UserServiceKey)
    const loadingCreate = ref(false)

    async function deleteUser(id: number) {
        await userService?.deleteUser(id)
        users.value = users.value.filter(user => user.id != id)
    }

    async function createUser(payload: UserCreatePayload) {
        loadingCreate.value = true
        const user = await userService?.createUser(payload)
        if (user) {
            users.value = [
                ...users.value,
                user
            ]
        }
        loadingCreate.value = false
    }

    return {
        deleteUser,
        createUser,
        loadingCreate
    }
}