import type { User } from "@/core/interfaces/User";
import axios from "axios";
import type { Ref } from "vue";

export function deleteUser(users: Ref<User[]>) {
    async function remove(id: number) {
        await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
        users.value = users.value.filter(user => user.id != id)
    }

    return {
        remove
    }
}