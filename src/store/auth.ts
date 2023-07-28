import { defineStore } from 'pinia'
import axios from 'axios'

type AuthState = {
    token: string | null
}

export const useAuthStore = defineStore({
    id: 'auth',
    state(): AuthState {
        return {
            token: localStorage.getItem('token') || null
        }
    },
    getters: {
        isAuth(state) {
            return !!state.token
        }
    },
    actions: {
        async login(payload: { email: string, password: string }) {
            const response = await axios.post('https://reqres.in/api/login', payload)
            this.token = response.data.token
            localStorage.setItem('token', this.token as string)
        }
    }
})