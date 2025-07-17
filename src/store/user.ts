import type { User } from "@/core/interfaces/user";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
     const users = ref<User[]>([]);

     async function getAll() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        users.value = res.data;
     }

     return {
        users,
        getAll
     }
})