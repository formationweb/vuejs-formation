import { defineStore } from "pinia";
import { User } from "../interfaces/User";
import axios from "axios";

interface UserState {
  users: User[];
  userModifying: User
}

export type UserPayload = { email: string; name: string };

const URL = import.meta.env.VITE_API_URL + "/users";

export const useUserStore = defineStore({
  id: "user",
  state(): UserState {
    return {
      users: [],
      userModifying: {} as User
    };
  },
  actions: {
    async getAll(): Promise<void> {
      const res = await axios.get(URL);
      this.users = res.data;
    },

    async get(id: number): Promise<void> {
      const res = await axios.get(URL + "/" + id);
      this.userModifying = res.data
    },

    async create(payload: UserPayload): Promise<void> {
      const res = await axios.post(URL, payload);
      this.users.push(res.data);
    },

    async update(id: number, payload: UserPayload): Promise<void> {
      const res = await axios.put(URL + "/" + id, payload);
      this.userModifying = res.data
      this.users = this.users.map(user => user.id == id ? res.data : user)
    },

    async delete(id: number): Promise<void> {
      await axios.delete(URL + "/" + id);
      const index = this.users.findIndex((user) => user.id == id);
      this.users.splice(index, 1);
    },
  },
  getters: {
    firstNames(): string[] {
      return this.users.map(user => user.name)
    }
  }
});
