import axios from "axios";
import { defineStore } from "pinia";

export interface AuthState {
    token: string | null
}

const KEY = 'token'

export const useAuthStore = defineStore({
    id: 'auth',
    state(): AuthState {
        return {
            token: localStorage.getItem(KEY)
        }
    },
    actions: {
        async login(email: string, password: string) {
            const res = await axios.post('https://reqres.in/api/login', {
                email,
                password
            })
            this.token = res.data.token  as string
            localStorage.setItem(KEY, this.token)
        }
    },
    getters: {
        isAuth(state: AuthState): boolean {
            return !!state.token
        }
    }
})