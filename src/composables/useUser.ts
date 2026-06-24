import type { UsersService } from "@/services/users"
import { useUserStore } from "@/store/user"
import { storeToRefs } from "pinia"
import { inject } from "vue"

export function useUser() {
    const userStore = useUserStore()
    const userService = inject<UsersService>('usersService')
    const { userModifying } = storeToRefs(userStore)

    return {
        userModifying,
        async remove(id: number) {
            await userService?.deleteUser(id)
            userStore.filterUsers(id)
        },
        async get(id: number) {
            const user = await userService?.getUser(id)
            if (user) {
                userStore.setCurrentUser(user)
            }
        }
    }
}