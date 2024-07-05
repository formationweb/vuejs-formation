import axios from "axios";
import { defineStore } from "pinia";
import { User } from "../interfaces/User";

interface UserState {
  users: User[];
}

export interface UserPayload {
    name: string
    email: string
}

const URI = import.meta.env.VITE_API_URL + '/users'

export const useUserStore = defineStore({
  id: "user",
  state(): UserState {
    return {
      users: [],
    };
  },
  actions: {
    async getAll() {
      const res = await axios.get(URI);
      this.users = res.data;
    },
    async deleteUser(id: number) {
      await axios.delete(URI + "/" + id);
      const index = this.users.findIndex((user) => user.id == id);
      this.users.splice(index, 1);
    },
    async createUser(values: UserPayload) {
      const { data } = await axios.post(URI, values)
      this.users.push(data)
    },
  },
});
