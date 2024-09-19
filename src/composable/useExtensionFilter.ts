import { computed, ref, Ref } from "vue";
import { User } from "../interfaces/User";

// export function useExtensionFilter(users: Ref<User[]>, extSelected: Ref<string>) {
//     return computed(() => {
//         return  users.value.filter(user => user.email.endsWith(extSelected.value))
//     })
// }

export function useExtensionFilter(users: Ref<User[]>) {
  const extSelected = ref("");
  const usersFiltered = computed(() => {
    return users.value.filter((user) => user.email.endsWith(extSelected.value));
  });
  return {
    extSelected,
    usersFiltered
  }
}
