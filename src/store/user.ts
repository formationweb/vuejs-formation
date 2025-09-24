import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "../interfaces/User";

const URL = 'https://jsonplaceholder.typicode.com/users'

export const useUserStore = defineStore('user', () => {
     const users = ref<User[]>([])

     async function getAll() {
        const res = await axios.get(URL)
        users.value = res.data
     }

     return {
        users,
        getAll
     }
})