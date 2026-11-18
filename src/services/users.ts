import axios from "axios";
import type { User } from "../core/interfaces/user";

export type UserPayload = {
    email: string
    name: string
}

const URL = 'https://jsonplaceholder.typicode.com/users'

export class UserService {
    async getUsers(): Promise<User[]> {
         const res = await axios.get(URL);
         return res.data
    }
    async deleteUser(id: number) {
        await axios.delete(URL + '/' + id)
    }
    async createUser(payload: UserPayload): Promise<User> {
        const res = await axios.post(URL, payload)
        return res.data
    }
    async getUser(id: number): Promise<User> {
        const res = await axios.get(URL + '/' + id);
        return res.data
    }
    async editUser(id: number, payload: UserPayload): Promise<User> {
        const res = await axios.put(URL + '/' + id, payload);
        return res.data
    }
}