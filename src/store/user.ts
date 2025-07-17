import type { User } from "@/core/interfaces/user";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);

  async function getAll() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    users.value = res.data;
  }

  async function deleteUser(id: number) {
    await axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
    users.value = users.value.filter((user) => user.id != id);
  }

  async function createUser() {
    const payload = {
      name: "ana",
      email: "ana@gamil.com",
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      payload
    );
    users.value = [...users.value, res.data];
  }

  return {
    users,
    getAll,
    deleteUser,
    createUser,
  };
});
