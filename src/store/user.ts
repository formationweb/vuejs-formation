import { defineStore } from "pinia";
import type { User } from "../interfaces/User";
import axios from "axios";

export interface UserState {
    users: User[]
}

const URL = 'https://jsonplaceholder.typicode.com/users'

export const useUserStore = defineStore({
    id: 'user',
    state(): UserState {
        return {
            users: []
        }
    },
    actions: {
        async getAll(): Promise<void> {
            const res = await axios.get(URL)
            this.users = res.data
        }
    }
})