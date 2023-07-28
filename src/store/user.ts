import { defineStore } from 'pinia'
import axios from 'axios'
import type { User } from '@/interfaces/User'

const URI: string = import.meta.env.VITE_API_URL + '/users'

type UserPayload =  Omit<User, 'id'>

export const useUserStore = defineStore({
    id: 'user',
    state(): {
        users: User[],
        user: User | null
    }  {
        return {
            users: [],
            user: null
        }
    },
    getters: { },
    actions: {
        async getAll() {
            const response = await axios.get(URI)
            this.users = response.data
        },
        async getUser(userId: string) {
            const response = await axios.get(URI + '/' + userId)
            this.user = response.data
        },
        async updateUser(userId: string, payload: UserPayload) {
            const response = await axios.put(URI + '/' + userId, payload)
            this.user = response.data
        },
        async createUser(payload: UserPayload) {
            const response = await axios.post(URI, payload)
            this.users.push(response.data)
        },
        async deleteUser(userId: number) {
            await axios.delete(URI + '/' + userId)
            const index = this.users.findIndex(user => user.id == userId)
            this.users.splice(index, 1)
        }
    }
})