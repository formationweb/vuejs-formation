import { computed, ref, type Ref } from "vue";
import type { User } from "../interfaces/User";

export function useExtensionFilter(users: Ref<User[]>) {
    const extSelected = ref('')
    const usersFiltered = computed(() => {
        if (!extSelected.value) {
            return users.value
        }
        return users.value.filter(user => user.email.endsWith(extSelected.value))
    })
    return {
        extSelected,
        usersFiltered
    }
}