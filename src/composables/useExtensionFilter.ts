import { computed, ref, type Ref } from "vue";
import type { User } from "../core/interfaces/user";

export function useExtensionFilter(users: Ref<User[]>) {
    const extSelected = ref('')
    const extensions = ref(['tv', 'biz', 'io', 'me']);

    const usersFiltered = computed(() => {
        return users.value.filter(user => user.email.endsWith(extSelected.value))
    })

    return {
        extSelected,
        extensions,
        usersFiltered
    }
}