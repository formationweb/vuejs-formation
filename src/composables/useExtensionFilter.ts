import { computed, ref, type ComputedRef, type Ref } from "vue";
import type { User } from "../interfaces/User";

type ExtensionFilterReturn = {
    extensions: Ref<string[]>
    extSelected: Ref<string>
    usersFiltered: ComputedRef<User[]>
}

export function useExtensionFilter(users: Ref<User[]>): ExtensionFilterReturn {
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