import type { User } from "@/core/interfaces/user";
import type { UsersService } from "@/services/users";
import axios from "axios";
import { inject, ref } from "vue";

export function useFetchUsers() {
  const users = ref<User[]>([]);
  const loading = ref(false)
  const error = ref('')
  const usersService = inject<UsersService>('usersService')

  async function getAllUser() {
    try {
        loading.value = true
        users.value = await (usersService?.getUsers() ?? [])
    }
    catch(err) {
        error.value = (err as Error).message
    }
    finally {
        loading.value = false
    }
  }

  return {
    error, // state
    loading, // state
    users, // state
    getAllUser // action
  }
}
