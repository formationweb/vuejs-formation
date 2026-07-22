import { inject, ref, type Ref } from "vue";
import { UserServiceKey } from "../keys";
import { UserService, type UserCreatePayload, type UserUpdatePayload } from "../core/services/user";
import type { User } from "../core/interfaces/user";
import { useUserStore } from "../store/user";

export function useUserManage() {
    const userStore = useUserStore()
    const userService = inject<UserService>(UserServiceKey)
    const loadingCreate = ref(false)

    async function deleteUser(id: number) {
        await userService?.deleteUser(id)
        userStore.filterUsers(id)
    }

    async function createUser(payload: UserCreatePayload) {
        loadingCreate.value = true
        const user = await userService?.createUser(payload)
        userStore.addUser(user)
        loadingCreate.value = false
    }

    async function getUser(id: number) {
        const user = await userService?.get(id)
        if (user) userStore.setCurrentUser(user)
    }

    async function updateUser(id: number, payload: UserUpdatePayload) {
        const user = await userService?.updateUser(id, payload)
        if (user) userStore.setCurrentUser({
            ...userStore.userModifying,
            ...user
        })
    }

    return {
        deleteUser,
        createUser,
        loadingCreate,
        getUser,
        updateUser
    }
}