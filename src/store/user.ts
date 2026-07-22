import { defineStore } from "pinia";
import type { User } from "../core/interfaces/user";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
     const users = ref<User[]>([]); // state

     const usersCount = computed(() => users.value.length) // getter

     function setUsers(newUsers: User[]) { // action
        users.value = newUsers
     }

     return {
        users,
        setUsers,
        usersCount
     }
})