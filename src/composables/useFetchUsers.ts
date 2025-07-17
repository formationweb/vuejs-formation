
import { useUserStore } from "@/store/user";
import { ref } from "vue";

export function useFetchUsers() {
  const userStore = useUserStore()
 
  const loading = ref(true)
  const error = ref(null)

  async function fetchUsers() {
   try {
    loading.value = true
    await userStore.getAll()
   }
   catch (err: any) {
    error.value = err
   }
   finally {
    loading.value = false
   }
  }

  return {
    fetchUsers,
    loading,
    error
  }
}
