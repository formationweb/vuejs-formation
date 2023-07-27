import { computed, type Ref } from 'vue'
import type { User } from "@/interfaces/User";

export function useExtensionFilter(users: Ref<User[]>, extSelected: Ref<string>) {
    return computed(() => {
        if (!extSelected.value) {
            return users.value
        }
        return users.value.filter(user => user.email.endsWith(extSelected.value))
    })
}