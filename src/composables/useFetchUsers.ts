import { ref } from "vue";
import type { User } from "../core/interfaces/user";

export function useFetchUsers() {
  const users = ref<User[]>([]);
  const loadingUsers = ref(false);
  const error = ref('')

  async function getAllUsers() {
    try {
      loadingUsers.value = true;
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      users.value = data;
    } catch (err: any) {
      error.value = err.message
    } finally {
      loadingUsers.value = false;
    }
  }

  return {
    users,
    getAllUsers,
    loadingUsers,
    error   
  };
}
