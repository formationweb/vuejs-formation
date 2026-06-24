import type { UsersService } from "@/services/users"
import { useUserStore } from "@/store/user"
import { inject } from "vue"

export function useUser() {
    const userStore = useUserStore()
    const userService = inject<UsersService>('usersService')

    return {
        async remove(id: number) {
            await userService?.deleteUser(id)
            userStore.filterUsers(id)
        }
    }
}