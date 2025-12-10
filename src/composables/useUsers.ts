import type { User } from "@/core/interfaces/User";
import axios from "axios";
import { ref, type Ref } from "vue";

export type UserPayload = {
    email: string
    name: string
}

export function deleteUser(users: Ref<User[]>) {
    async function remove(id: number) {
        await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
        users.value = users.value.filter(user => user.id != id)
    }

    return {
        remove
    }
}

export function createUser(users: Ref<User[]>) {
    const loadingCreate = ref(false)

    async function create(payload: UserPayload) {
        loadingCreate.value = true
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', payload)
        users.value = [...users.value, res.data]
        loadingCreate.value = false
    }

    return {
        create,
        loadingCreate
    }
}