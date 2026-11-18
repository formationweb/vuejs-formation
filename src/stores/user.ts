import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "../core/interfaces/user";

export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([]);
    const nbUsers = computed(() => users.value.length)

    function setUsers(data: User[]) {
        users.value = data
    }

    return {
        users,
        nbUsers,
        setUsers
    }
})