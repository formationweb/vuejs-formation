import axios from "axios";
import { ref } from "vue";
import { User } from "../interfaces/User";

export function useFetchUsers() {
  const loading = ref(false);
  const users = ref<User[]>([])

  async function getAll() {
    try {
        loading.value = true
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        //await new Promise(resolve => setTimeout(resolve, 2000))
        users.value = res.data;
    }
    catch (err) {
        console.log(err)
    }
    finally {
        loading.value = false
    }
  }

  return {
    loading,
    users,
    getAll
  }
}
