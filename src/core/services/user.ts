import axios from "axios";
import type { User } from "../interfaces/user";

// export type UserCreatePayload = {
//     email: string
//     name: string
// }

export type UserCreatePayload = Pick<User, 'email'> & Pick<User, 'name'>
export type UserUpdatePayload = UserCreatePayload

export class UserService {
    readonly url = "https://jsonplaceholder.typicode.com/users"

    async getAll(): Promise<User[]> {
        const res = await axios.get(this.url);
        return res.data;
    }

    async get(id: number): Promise<User> {
        const res = await axios.get(this.url + '/' + id);
        return res.data;
    }

    async createUser(payload: UserCreatePayload): Promise<User> {
        const res = await axios.post(this.url, payload)
        return res.data
    }

    async updateUser(id: number, payload: UserUpdatePayload): Promise<User> {
        const res = await axios.put(this.url + '/' + id, payload)
        return res.data
    }

    async deleteUser(id: number): Promise<void> {
        await axios.delete(this.url + '/' + id)
    }
}