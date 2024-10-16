import { defineStore } from "pinia";
import type { User } from "../interfaces/User";
import axios from "axios";

export type UserPayload = { email: string, name: string }

export interface UserState {
    users: User[],
    userModifying: User
}

const URL = 'https://jsonplaceholder.typicode.com/users'

export const useUserStore = defineStore({
    id: 'user',
    state(): UserState {
        return {
            users: [],
            userModifying: {} as User
        }
    },
    actions: {
        async getAll(): Promise<void> {
            const res = await axios.get(URL)
            this.users = res.data
        },
        async get(id: number): Promise<void> {
            const res = await axios.get(URL + '/' + id)
            this.userModifying = res.data
        },
        async create(payload: UserPayload): Promise<void> {
            const res = await axios.post(URL, payload)
            this.users.push(res.data)
        },
        async update(id: number, payload: UserPayload): Promise<void> {
            const res = await axios.put(URL + '/' + id, payload)
            // this.userModifying = {
            //     ...this.userModifying,
            //     ...res.data
            // }
            this.userModifying = res.data
            this.users = this.users.map(user => user.id == id ? this.userModifying : user)
        },
        async delete(id: number): Promise<void> {
            await axios.delete(URL + '/' + id)
            this.users = this.users.filter(user => user.id != id)
        }
    },
    getters: {
        firstNames(): string[] {
            return this.users.map(user => user.name)
        }
    }
})