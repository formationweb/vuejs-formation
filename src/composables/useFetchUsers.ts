import { inject, ref } from "vue";
import type { User } from "../core/interfaces/user";
import axios from "axios";
import type { UserService } from "../core/services/user";

export function useFetchUsers() {
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref<null | string>(null);
  const userService = inject<UserService>('userService')

  async function getAllUser() {
    try {
      loading.value = true;
      users.value = (await userService?.getAll() ?? [])
    } catch (err) {
        error.value = (err as Error).message
    }
    finally {
        loading.value = false;
    }
  }

  return {
    users,
    getAllUser,
    loading,
    error
  };
}
