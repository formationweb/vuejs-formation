import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "../core/interfaces/user";

export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([]);
    const userModifying = ref<User>({} as User) 
    const nbUsers = computed(() => users.value.length)

    function setUsers(data: User[]) {
        users.value = data
    }

    function setCurrentUser(data: User) {
        userModifying.value = data
    }

    function addUser(user: User) {
        users.value = [...users.value, user]
    }

    function removeUser(id: number) {
        users.value = users.value.filter(user => user.id != id)
    }

    return {
        users,
        nbUsers,
        userModifying,
        setUsers,
        addUser,
        removeUser,
        setCurrentUser
    }
})