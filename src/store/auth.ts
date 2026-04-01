import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const KEY= 'token'

export const useAuthStore = defineStore('auth', () => {
    // state
    const token = ref(localStorage.getItem(KEY) ?? '')

    // getter
    const isConnected = computed(() => !!token.value)

    // action
    async function login(payload: { email: string, password: string}) {
        const res = await axios.post('https://apprendre.angular.fr/api/fake/login', payload)
        token.value = res.data.token
        localStorage.setItem(KEY, token.value)
    }

    return {
        token,
        isConnected,
        login
    }
})