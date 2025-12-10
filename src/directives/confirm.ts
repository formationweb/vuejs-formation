import type { Directive } from "vue";

type InputBinding = {
    message: string
    onConfirm: () => void
}

export const confirmDirective: Directive<HTMLButtonElement, InputBinding> = {
    mounted(btn, binding) {
        btn.addEventListener('click', () => {
            const { message, onConfirm } = binding.value
            const bool = window.confirm(message)
            if (bool) onConfirm()
        })
    }
}