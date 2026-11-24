import { inject, ref } from "vue";
import type { User } from "../core/interfaces/user";
import type { UserService } from "../core/services/user";
import { USER_SERVICE } from "../tokens";
import { useUserStore } from "../stores/user";

export function useUserManage() {
  const userStore = useUserStore()
  const loadingUsers = ref(false);
  const userService = inject<UserService>(USER_SERVICE)

  async function getAllUsers() {
    try {
      loadingUsers.value = true;
      const data = await userService?.getAll()
      userStore.setUsers(data ?? [])
    } catch (err) {
      console.log(err);
    } finally {
      loadingUsers.value = false;
    }
  }

  async function removeUser(id: number) {
    await userService?.delete(id)
    userStore.filterUsers(id)
  }

   async function getUser(id: number) {
    const user = await userService?.getById(id)
    if (user) userStore.setCurrentUser(user)
  }

  return {
    loadingUsers,
    getAllUsers,
    removeUser,
    getUser
  };
}
