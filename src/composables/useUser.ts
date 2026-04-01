import { useUserStore } from './../store/user';
import { inject, ref } from "vue"
import type { UserPayload, UserService } from "../services/users"

export function useUser() {
    const userStore = useUserStore()
    const userService = inject<UserService>('userService')
    const loadingCreate = ref(false)
    return {
        async remove(id: number) {
            await userService?.deleteUser(id)
            userStore.filterUser(id)
        },
        async create(values: UserPayload) {
            const user = await userService?.createUser(values)
            if (user) {
                userStore.addUser(user)
            }
        },
        async getUser(id: number) {
            const user = await userService?.getUser(id)
            if (user) {
                userStore.setCurrentUser(user)
            }
        },
        async updateUser(id: number, values: UserPayload) {
            const userModified = await userService?.updateUser(id, values)
            if (userModified) {
                userStore.setCurrentUser(userModified)
            }
        },
        loadingCreate
    }
}