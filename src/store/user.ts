import { defineStore } from "pinia";
import type { User } from "../core/interfaces/user";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
     const users = ref<User[]>([]); // state
     const userModifying = ref<User | undefined>()

     const usersCount = computed(() => users.value.length) // getter

     function setUsers(newUsers: User[]) { // action
        users.value = newUsers
     }

     function setCurrentUser(user: User) {
         userModifying.value = user
     }

     function filterUsers(id: number) {
        users.value = users.value.filter(user => user.id != id)
     }

     function addUser(user?: User) {
        if (user) {
            users.value = [
                ...users.value,
                user
            ]
        }
     }

     return {
        users,
        setUsers,
        filterUsers,
        addUser,
        usersCount,
        setCurrentUser,
        userModifying
     }
})