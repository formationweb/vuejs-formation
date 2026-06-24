import type { User } from "@/core/interfaces/user";
import type { UsersService } from "@/services/users";
import { useUserStore } from "@/store/user";
import axios from "axios";
import { storeToRefs } from "pinia";
import { inject, ref } from "vue";

export function useFetchUsers() {
  const userStore = useUserStore()
  const loading = ref(false)
  const error = ref('')
  const usersService = inject<UsersService>('usersService')
  const { users } = storeToRefs(userStore)

  async function getAllUser() {
    try {
        loading.value = true
        const users = await (usersService?.getUsers() ?? [])
        userStore.setUsers(users)
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
