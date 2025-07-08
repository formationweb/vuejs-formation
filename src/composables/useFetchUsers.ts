import axios from "axios";
import { ref } from "vue";

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function useFetchUsers() {
  const users = ref([]);
  const loading = ref(false);
  const error = ref<null | unknown>(null)

  async function getAll() {
    try {
        loading.value = true;
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        await wait(2000);
        users.value = res.data;
    }
    catch (err) {
        error.value = err
    }
    finally {
        loading.value = false;
    }
  }

  return {
    users,
    getAll,
    loading,
    error
  };
}
