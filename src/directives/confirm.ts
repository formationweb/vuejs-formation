type Binding = {
    message: string,
    cb: () => void
}

export const confirmDirective = {
    created(btn: HTMLElement, binding: { value: Binding }) {
        btn.addEventListener('click', () => {
            const { cb, message } = binding.value
            const bool = window.confirm(message)
            if (bool) cb()
        })
    }
}