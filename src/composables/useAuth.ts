import axios, { AxiosError } from "axios";
import { reactive, ref } from "vue";

const KEY_TOKEN = 'token'

export function useAuth()  {
    // const email = ref('host@example.com')
    // const password = ref('password123')

    const fields = reactive({
        email: 'host@example.com',
        password: 'password123'
    })

    const token = ref(localStorage.getItem(KEY_TOKEN))
    const error = ref('')

    async function login() {
       try {
        const res = await axios.post('https://apprendre.angular.fr/api/fake/login', fields)
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
        fields,
        login,
        error
    }
}