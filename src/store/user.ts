import type { User } from "@/core/interfaces/user";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const URL = "https://jsonplaceholder.typicode.com/users"

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);
  const userModifying = ref<User | null>(null)

  async function getAll() {
    const res = await axios.get(URL);
    users.value = res.data;
  }

  async function getUser(id: number) {
   const res = await axios.get(URL + '/' + id);
   userModifying.value = res.data
 }

  async function deleteUser(id: number) {
    await axios.delete(URL + '/' + id);
    users.value = users.value.filter((user) => user.id != id);
  }

  async function createUser() {
    const payload = {
      name: "ana",
      email: "ana@gamil.com",
    };
    const res = await axios.post(
      URL,
      payload
    );
    users.value = [...users.value, res.data];
  }

  return {
    users,
    userModifying,
    getAll,
    deleteUser,
    createUser,
    getUser
  };
});
