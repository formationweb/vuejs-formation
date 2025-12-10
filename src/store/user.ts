import type { UserPayload } from "@/composables/useUsers";
import type { User } from "@/core/interfaces/User";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const URL = "https://jsonplaceholder.typicode.com/users"

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);

  async function getAll() {
    const res = await axios.get(URL);
    users.value = res.data;
  }

  async function remove(id: number) {
    await axios.delete(URL + '/' + id);
    users.value = users.value.filter((user) => user.id != id);
  }

  async function create(payload: UserPayload) {
    const res = await axios.post(
      URL,
      payload
    );
    users.value = [...users.value, res.data];
  }

  return {
    users,
    getAll,
    remove,
    create,
  };
});
