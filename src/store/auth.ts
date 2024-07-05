import axios from "axios";
import { defineStore } from "pinia";

interface AuthState {
    token: string | null
}

export const useAuthStore = defineStore({
    id: 'auth',
    state(): AuthState {
        return {
            token: null
        }
    },
    actions: {
        async login(email: string, password: string) {
            const res = await axios.post('https://reqres.in/api/login', { email, password })
            this.token = res.data.token
        }
    },
    getters: {
        isAuth(state): boolean {
            return !!state.token
        }
    }
})