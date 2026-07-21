import axios from "axios";
import type { User } from "../interfaces/user";

export class UserService {
    async getAll(): Promise<User[]> {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        return res.data;
    }
}