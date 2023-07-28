import type { User } from "@/interfaces/User"
import { useUserStore } from "@/store/user"
import axios from "axios"
import { ref } from "vue"

export function useFetchUsers() {
    const userStore = useUserStore()
    const loading = ref(false)

    async function getAll() {
        try {
            loading.value = true
            await userStore.getAll()
        }
        catch (err) {
            console.log(err)
        }
        finally {
            loading.value = false
        }
    }

    return {
        loading,
        getAll
    }
}