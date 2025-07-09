import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    //state
    const token = ref('')

    // action
    async function login(email: string, password: string) {
        const res = await axios.post('https://reqres.in/api/login', {
            email,
            password
        })
        token.value = res.data.token
    }

    return {
        login,
        token
    }
})