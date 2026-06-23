import type { User } from "@/core/interfaces/user";
import { computed, ref, type Ref } from "vue";

export function useExtentionFilter(users: Ref<User[]>) {
  const extension = ref("");
  const extensions = ref(["tv", "biz", "io", "me"]);

  const usersFiltered = computed(() => {
    if (!extension.value) {
      return users.value;
    }
    return users.value.filter((user) => user.email.endsWith(extension.value));
  });

  return {
    extension,
    extensions,
    usersFiltered
  }
}
