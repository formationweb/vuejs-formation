import type { User } from "@/core/interfaces/User";
import type { UserPayload, UserService } from "@/services/user";
import { useUserStore } from "@/store/user";
import axios from "axios";
import { inject, ref, type Ref } from "vue";



export function deleteUser() {
    const userStore = useUserStore()
    const userService = inject<UserService>('userService')
    return {
        async remove(id :number) {
            await userService?.removeUser(id)
            userStore.remove(id)
        }
    }
}

export function createUser() {
    const loadingCreate = ref(false)
    const userStore = useUserStore()
    const userService = inject<UserService>('userService')

    async function create(payload: UserPayload) {
        loadingCreate.value = true
        const user = await userService?.createUser(payload)
        if (user) userStore.create(user)
        loadingCreate.value = false
    }

    return {
        create,
        loadingCreate
    }
}