import { inject, ref } from "vue";
import type { User } from "../core/interfaces/user";
import axios from "axios";
import type { UserService } from "../core/services/user";
import { UserServiceKey } from "../keys";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";

export function useFetchUsers() {
  const userStore = useUserStore()
  const { users } = storeToRefs(userStore)
  const loading = ref(false);
  const error = ref<null | string>(null);
  const userService = inject<UserService>(UserServiceKey)

  async function getAllUser() {
    try {
      loading.value = true;
      const users = (await userService?.getAll() ?? [])
      userStore.setUsers(users)
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
