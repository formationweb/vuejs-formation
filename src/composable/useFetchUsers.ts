import { ref } from "vue";
import { useUserStore } from "../store/user";

export function useFetchUsers() {
  const userStore = useUserStore();
  const loading = ref(false);

  async function getAll() {
    try {
      loading.value = true;
      await userStore.getAll();
    } catch (err) {
      console.log(err);
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    getAll,
  };
}
