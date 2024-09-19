import axios from "axios"
import { User } from "../interfaces/User"
import { inject, ref } from "vue"
import { UserService } from "../services/UserService"

export function useFetchUsers() {
    const users = ref<User[]>([])
    const loading = ref(false)
    const userService = inject<UserService>('userService')

    async function getAll() {
        try {
            loading.value = true
            if (userService) {
                users.value = await userService.getAll()
            }
            //await new Promise(resolve => setTimeout(resolve, 2000))
        }
        catch (err) {
            console.log(err)
        }
        finally {
            loading.value = false
        }
    }

    return {
        getAll,
        users,
        loading
    }
}