import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "../core/interfaces/user";

export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([]); // state
    const userModifying = ref<User>({} as User)

    function setUsers(data: User[]) {  // action
        users.value = data // mutate
    }

    function filterUsers(id: number) {
        users.value = users.value.filter(user => user.id != id)
    }

    function setCurrentUser(data: User) {
        userModifying.value = data
    }

    return {
        users,
        userModifying,
        setUsers,
        filterUsers,
        setCurrentUser
    }
})