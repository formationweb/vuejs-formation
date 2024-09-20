import { ref } from "vue"
import { useUserStore } from "../store/user"

export function useFetchUsers() {
    const loading = ref(false)
    const userStore = useUserStore()

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
        getAll,
        loading
    }
}