import { inject, type Ref } from "vue";
import type { UserPayload, UserService } from "../services/users";
import { USER_SERVICE_TOKEN } from "../tokens";
import type { User } from "../core/interfaces/user";
import { ref } from "vue";
import { useUserStore } from "../stores/user";

export function useUserManage() {
    const userStore = useUserStore()
    const userService = inject<UserService>(USER_SERVICE_TOKEN)
    const loadingCreate = ref(false)

    async function deleteUser(id: number) {
        await userService?.deleteUser(id)
        userStore.removeUser(id)
    }

    async function createUser(payload: UserPayload) {
        loadingCreate.value = true
        const user = await userService?.createUser(payload)
        if (user) userStore.addUser(user)
        loadingCreate.value = false
    }

    async function getUser(id: number) {
        const user = await userService?.getUser(id)
        if (user) userStore.setCurrentUser(user)
    }

    async function updateUser(id: number, payload: UserPayload) {
        const user = await userService?.editUser(id, payload)
        if (user) userStore.setCurrentUser(user)
    }

    return {
        deleteUser,
        createUser,
        getUser,
        updateUser,
        loadingCreate
    }
}