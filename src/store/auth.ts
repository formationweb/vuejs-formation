import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () => {
    // state
    const token = ref('')
    const hasToken = computed(() => !!token.value)

    // action
    async function login(email: string, password: string) {
        const res = await axios.post('https://reqres.in/api/login', {
            email,
            password
        })
        token.value = res.data.token
    }

    return {
        token,
        login,
        hasToken
    }
})