import type { User } from "@/core/interfaces/User";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);
  const userModifying = ref<User | undefined>()

  function getAll(data: User[]) {
    users.value = data;
  }

  function remove(id: number) {
    users.value = users.value.filter((user) => user.id != id);
  }

  function create(data: User) {
    users.value = [...users.value, data];
  }

  function currentModifying(data: User) {
    userModifying.value = {
      ...(userModifying.value ?? {}),
      ...data
    }
  }

  return {
    users,
    userModifying,
    getAll,
    remove,
    create,
    currentModifying
  };
});
