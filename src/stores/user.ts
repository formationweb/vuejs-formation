import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "../core/interfaces/user";

export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([]); // state

    function setUsers(data: User[]) {  // action
        users.value = data // mutate
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