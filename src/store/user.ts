import type { User } from "@/core/interfaces/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([]) // state

    function setUsers(data: User[]) { // action (qui fait la mutation)
        users.value = data
    }

    function filterUsers(id: number) {
        users.value = users.value.filter(user => user.id != id)
    }

    return {
        users,
        setUsers,
        filterUsers
    }
})