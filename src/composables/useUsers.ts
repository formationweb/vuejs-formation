import type { User } from "@/core/interfaces/User";
import { useUserStore } from "@/store/user";
import axios from "axios";
import { ref, type Ref } from "vue";

export type UserPayload = {
    email: string
    name: string
}

export function deleteUser() {
   const userStore = useUserStore()

    return {
        remove: userStore.remove
    }
}

export function createUser() {
    const loadingCreate = ref(false)
    const userStore = useUserStore()

    async function create(payload: UserPayload) {
        loadingCreate.value = true
        await userStore.create(payload)
        loadingCreate.value = false
    }

    return {
        create,
        loadingCreate
    }
}