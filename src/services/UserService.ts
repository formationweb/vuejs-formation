import axios from "axios"
import type { User } from "../interfaces/User"

export class UserService {
    readonly url = 'https://jsonplaceholder.typicode.com/users'

    async getAll(): Promise<User[]> {
        const res = await axios.get(this.url)
        return res.data
    }
}