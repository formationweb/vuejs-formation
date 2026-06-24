import type { User } from "@/core/interfaces/user";
import axios from "axios";

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
}