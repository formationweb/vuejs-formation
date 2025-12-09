import type { User } from "@/core/interfaces/User";
import { computed, ref, type Ref } from "vue";

export function useExtensionFilter(users: Ref<User[]>) {
  const extensions = ref(["tv", "biz", "io", "me"]);
  const extSelected = ref("");

  const usersFiltered = computed(() => {
    if (!extSelected.value) {
      return users.value;
    }
    return users.value.filter((user) => user.email.endsWith(extSelected.value));
  });

  return {
    extSelected,
    extensions,
    usersFiltered
  }
}
