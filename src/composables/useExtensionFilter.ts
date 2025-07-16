import type { User } from "@/core/interfaces/user";
import { computed, ref, type Ref } from "vue";

export function useExtensionFilter(users: Ref<User[]>) {
  const extSelected = ref("");
  const extensions = ref(["tv", "biz", "io", "me"]);

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
