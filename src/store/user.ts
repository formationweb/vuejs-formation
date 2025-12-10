import type { UserPayload } from "@/composables/useUsers";
import type { User } from "@/core/interfaces/User";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);

  function getAll(data: User[]) {
    users.value = data;
  }

  function remove(id: number) {
    users.value = users.value.filter((user) => user.id != id);
  }

  function create(data: User) {
    users.value = [...users.value, data];
  }

  return {
    users,
    getAll,
    remove,
    create,
  };
});
