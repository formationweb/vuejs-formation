import { inject, ref } from "vue";
import type { User } from "../core/interfaces/user";
import axios from "axios";
import type { UserService } from "../services/users";
import { USER_SERVICE_TOKEN } from "../tokens";

export function useFetchUsers() {
  const users = ref<User[]>([]);
  const loadingUsers = ref(false);
  const error = ref('')
  const userService = inject<UserService>(USER_SERVICE_TOKEN)

  async function getAllUsers() {
    try {
      loadingUsers.value = true;
      const data = await userService?.getUsers()
      if (data) users.value = data
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
