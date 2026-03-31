import axios from "axios"
import type { User } from "../interfaces/user"

const URL = 'https://jsonplaceholder.typicode.com/users'

export class UserService {
    async getUsers(): Promise<User[]> {
        const res = await axios.get(URL)
        return res.data
    }
    async deleteUser(id: number): Promise<void> {
        await axios.delete(URL + '/' + id)
    }
}