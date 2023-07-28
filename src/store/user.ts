import { defineStore } from 'pinia'
import axios from 'axios'
import type { User } from '@/interfaces/User'

const URI: string = import.meta.env.VITE_API_URL + '/users'

export const useUserStore = defineStore({
    id: 'user',
    state(): {
        users: User[]
    }  {
        return {
            users: []
        }
    },
    getters: { },
    actions: {
        async getAll() {
            const response = await axios.get(URI)
            this.users = response.data
        },
        async createUser(payload: Omit<User, 'id'>) {
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