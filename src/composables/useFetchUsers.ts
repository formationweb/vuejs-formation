import { inject, ref, type Ref } from "vue";
import type { UserService } from "../services/UserService";
import type { User } from "../interfaces/User";
import { useUserStore } from "../store/user";

type FetchUsers = {
    loading: Ref<boolean>
    getAll: () => Promise<void>
}

export function useFetchUsers(): FetchUsers {
    const userStore = useUserStore()
    const loading = ref(false)

    async function getAll() {
        try {
            loading.value = true
            await userStore.getAll()
        }
        catch (err) {
            throw err
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