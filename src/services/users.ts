import type { User } from "@/core/interfaces/user";
import axios from "axios";

export type UserPayload = {
    name: string
    email: string
}

export class UsersService {
    readonly url = "https://jsonplaceholder.typicode.com/users"

    async getUsers(): Promise<User[]> {
        const res = await axios.get(this.url);
        return res.data;  
    }

    async deleteUser(id: number): Promise<void> {
        await axios.delete(this.url + '/' + id)
    }

    async getUser(id: number): Promise<User> {
        const res = await axios.get(this.url + '/' + id)
        return res.data
    }

    async updateUser(id: number, data: UserPayload): Promise<User> {
        const res = await axios.put(this.url + '/' + id, data)
        return res.data
    }
}