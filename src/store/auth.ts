import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const KEY_TOKEN = 'token'

export const useAuthStore = defineStore('auth', () => {
    // state
    const token = ref(localStorage.getItem(KEY_TOKEN))
    const error = ref('')

    // getter
    const isConnected = computed(() => !!token.value)

    // action
    async function login(payload: { email: string, password: string}) {
       try {
        const res = await axios.post('https://apprendre.angular.fr/api/fake/login', payload)
        token.value = res.data.token
        localStorage.setItem(KEY_TOKEN, token.value ?? '')
       }
       catch (err) {
         const axiosError = err as AxiosError
         const data =  axiosError.response?.data
         if (data && typeof data == 'object' && 'error' in data) {
            error.value = data.error as string
         }
         throw err
       }
    }

    return {
        login,
        error,
        isConnected,
        token
    }
})