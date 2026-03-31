import { computed, ref, type Ref } from "vue";
import type { User } from "../interfaces/user";

export function useExtensionFilter(users: Ref<User[]>) {
    const extensions = ref(['tv', 'biz', 'io', 'me']);

    const extSelected = ref('')

    const usersFiltered = computed(() => {
        if (!extSelected.value) {
            return users.value
        }
        return users.value.filter(user => user.email.endsWith(extSelected.value))
    })

    return {
        extensions,
        extSelected,
        usersFiltered
    }
}