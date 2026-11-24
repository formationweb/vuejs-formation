import type { User } from "../interfaces/user";

const URL = "https://jsonplaceholder.typicode.com/users"

export class UserService {
    async getAll(): Promise<User[]> {
        const res = await fetch(URL);
        const data = await res.json();
        return data
    }
     async getById(id: number): Promise<User> {
        const res = await fetch(URL + '/' + id);
        const data = await res.json();
        return data
    }
    async delete(id: number): Promise<void> {
        await fetch(URL + '/' + id, {
            method: 'DELETE'
        });   
    }
}