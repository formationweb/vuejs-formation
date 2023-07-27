import { computed, type Ref } from 'vue'
import type { User } from "@/interfaces/User";

export function useExtensionFilter(users: User[], extSelected: Ref<string>) {
    return computed(() => {
        if (!extSelected.value) {
            return users
        }
        return users.filter(user => user.email.endsWith(extSelected.value))
    })
}