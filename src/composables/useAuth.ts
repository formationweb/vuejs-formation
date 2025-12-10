import axios, { AxiosError } from "axios";
import { ref } from "vue";

const KEY_TOKEN = 'token'

export function useAuth()  {
    const email = ref('host@example.com')
    const password = ref('password123')
    const token = ref(localStorage.getItem(KEY_TOKEN))
    const error = ref('')

    async function login() {
       try {
        const res = await axios.post('https://apprendre.angular.fr/api/fake/login', {
            email: email.value,
            password: password.value
        })
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
        email,
        password,
        login,
        error
    }
}