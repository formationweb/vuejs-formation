import type { Directive } from "vue";
import type { User } from "../interfaces/user";

type InputBinding = {
    message: string
    user: User
    onConfirm: () => void
}

export const confirmDirective: Directive<HTMLButtonElement, InputBinding> = {
    mounted(btn, binding) {
        btn.addEventListener('click', () => {
            const { message, user, onConfirm } = binding.value
            const bool = window.confirm(message + ' ' + user.name)
            if (bool) onConfirm()
        })
    }
}