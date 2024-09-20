import { defineStore } from "pinia";
import { User } from "../interfaces/User";
import axios from "axios";

interface UserState {
  users: User[];
}

export type UserPayload = { email: string; name: string };

const URL = "https://jsonplaceholder.typicode.com/users";

export const useUserStore = defineStore({
  id: "user",
  state(): UserState {
    return {
      users: [],
    };
  },
  actions: {
    async getAll(): Promise<void> {
      const res = await axios.get(URL);
      this.users = res.data
    },

    async create(payload: UserPayload): Promise<User> {
      const res = await axios.post(URL, payload);
      return res.data;
    },

    delete(id: number): Promise<void> {
      return axios.delete(URL + "/" + id);
    },
  },
});
