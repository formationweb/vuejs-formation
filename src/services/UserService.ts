import axios from "axios"
import type { User } from "../interfaces/User"

export type UserPayload = { email: string, name: string }

export class UserService {
    readonly url = 'https://jsonplaceholder.typicode.com/users'

    // async getAll(): Promise<User[]> {
    //     const res = await axios.get(this.url)
    //     return res.data
    // }

    async create(payload: UserPayload): Promise<User> {
        const res = await axios.post(this.url, payload)
        return res.data
    }

    delete(id: number): Promise<void> {
        return axios.delete(this.url + '/' + id)
    }
}