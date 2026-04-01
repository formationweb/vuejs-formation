import axios from "axios"
import type { User } from "../interfaces/user"

const URL = 'https://jsonplaceholder.typicode.com/users'

export type UserPayload = {
    name: string
    email: string
}

export class UserService {
    async getUsers(): Promise<User[]> {
        const res = await axios.get(URL)
        return res.data
    }
    async deleteUser(id: number): Promise<void> {
        await axios.delete(URL + '/' + id)
    }
    async createUser(payload: UserPayload): Promise<User> {
        const res = await axios.post(URL, payload)
        return res.data
    }
    async getUser(id: number): Promise<User> {
        const res = await axios.get(URL + '/' + id)
        return res.data
    }
    async updateUser(id: number, payload: UserPayload): Promise<User> {
        const res = await axios.put(URL + '/' + id, payload)
        return res.data
    }
}