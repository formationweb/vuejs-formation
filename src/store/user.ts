import axios from "axios";
import { defineStore } from "pinia";
import { User } from "../interfaces/User";

interface UserState {
    users: User[]
}

const URI = 'https://jsonplaceholder.typicode.com/users'

export const useUserStore = defineStore({
    id: 'user',
    state(): UserState {
        return {
            users: []
        }
    },
    actions: {
        async getAll() {
            const res = await axios.get(URI);
            this.users = res.data
        }
    }
})