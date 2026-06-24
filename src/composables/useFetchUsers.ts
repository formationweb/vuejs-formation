import type { User } from "@/core/interfaces/user";
import axios from "axios";
import { ref } from "vue";

export function useFetchUsers() {
  const users = ref<User[]>([]);
  const loading = ref(false)
  const error = ref('')

  async function getAllUser() {
    try {
        loading.value = true
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        users.value = res.data;  
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
