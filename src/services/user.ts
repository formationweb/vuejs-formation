import type { User } from "@/core/interfaces/User";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users"

export type UserPayload = {
    email: string
    name: string
}

export class UserService {
    getUsers():Promise<User[]> {
        return axios.get(URL).then(res => res.data);
    }
    removeUser(id: number): Promise<void> {
        return axios.delete(URL + '/' + id);
    }
    createUser(payload: UserPayload): Promise<User> {
        return axios.post(URL, payload).then(res => res.data)
    }
}