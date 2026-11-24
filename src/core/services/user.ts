import type { User } from "../interfaces/user";

const URL = "https://jsonplaceholder.typicode.com/users"

export class UserService {
    async getAll(): Promise<User[]> {
        const res = await fetch(URL);
        const data = await res.json();
        return data
    }
}