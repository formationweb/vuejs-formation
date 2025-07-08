import { computed, ref, type ComputedRef, type Ref } from "vue";
import type { User } from "../interfaces/User";

type ExtensionReturn = {
    usersFiltered: ComputedRef<User[]>
    extSelected: Ref<string>,
    extensions: Ref<string[]>,
}

export function useExtensionFilter(users: Ref<User[]>): ExtensionReturn {
  const extensions = ref(["tv", "biz", "io", "me"]);
  const extSelected = ref("");

  const usersFiltered = computed(() => {
    if (extSelected.value == "") {
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
