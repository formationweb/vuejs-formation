type Binding = {
    message: string
    cb: () => void
}

export const confirmDirective = {
    created(btn: HTMLButtonElement, binding: { value: Binding }) {
        btn.addEventListener('click', () => {
            const { message, cb } = binding.value
            const bool = window.confirm(message)
            if (bool) cb()
        })
    }
 }