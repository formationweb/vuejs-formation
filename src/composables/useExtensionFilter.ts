import type { User } from "@/core/interfaces/user";
import { computed, ref, type ComputedRef, type Ref } from "vue";

type ExtensionReturn = {
    extSelected: Ref<string>
    extensions: Ref<string[]>
    usersFiltered: ComputedRef<User[]>
}

export function useExtensionFilter(users: Ref<User[]>): ExtensionReturn {
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
