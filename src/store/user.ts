import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "../interfaces/User";

export type UserPayload = { email: string, name: string }

const URL = "https://jsonplaceholder.typicode.com/users";

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);

  async function getAll() {
    const res = await axios.get(URL);
    users.value = res.data;
  }

  async function deleteUser(id: number) {
    await axios.delete(URL + "/" + id);
    users.value = users.value.filter((user) => user.id != id);
  }

  async function createUser(values: UserPayload) {
    const res = await axios.post(
      URL,
      values
    );
    users.value = [...users.value, res.data];
  }

  return {
    users,
    getAll,
    deleteUser,
    createUser
  };
});
