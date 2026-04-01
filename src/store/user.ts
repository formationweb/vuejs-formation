import { defineStore } from "pinia";
import type { User } from "../interfaces/user";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([])
    
    function setUsers(data: User[]) {
        users.value = data
    }

    function filterUser(id: number) {
        users.value = users.value.filter(user => user.id != id)
    }

    function addUser(data: User) {
         users.value = [
            ...users.value,
            data
        ]
    }

    return {
        users,
        setUsers,
        filterUser,
        addUser
    }
})