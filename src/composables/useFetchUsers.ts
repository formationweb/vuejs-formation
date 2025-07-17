import type { User } from "@/core/interfaces/user";
import axios from "axios";
import { ref } from "vue";

export function useFetchUsers() {
  const users = ref<User[]>([]);
  const loading = ref(true)
  const error = ref(null)

  async function getAll() {
   try {
    loading.value = true
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    users.value = res.data;
   }
   catch (err: any) {
    error.value = err
   }
   finally {
    loading.value = false
   }
  }

  return {
    users,
    getAll,
    loading,
    error
  }
}
