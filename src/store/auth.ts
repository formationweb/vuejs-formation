import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const KEY_STORAGE = 'token'

export const useAuthStore = defineStore('auth', () => {
    // state
    const token = ref(localStorage.getItem(KEY_STORAGE) ?? '')

    // getter
    const isConnected = computed(() => !!token.value)

    // action
    async function login(email: string, password: string) {
        const res = await axios.post('https://reqres.in/api/login', {
            email, 
            password
        }, {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
        token.value = res.data.token
        localStorage.setItem(KEY_STORAGE, token.value)
    }

    return {
        token, 
        login,
        isConnected
    }
})