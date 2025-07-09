import axios from "axios";
import { ref } from "vue";
import type { User } from "../interfaces/User";
import { useUserStore } from "../store/user";

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function useFetchUsers() {
  const userStore = useUserStore()
  const loading = ref(false);
  const error = ref<null | unknown>(null)

  async function getAll() {
    try {
        loading.value = true;
        await userStore.getAll()
    }
    catch (err) {
        error.value = err
    }
    finally {
        loading.value = false;
    }
  }

  return {
    getAll,
    loading,
    error
  };
}
