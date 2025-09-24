type Binding = {
    message: string
    confirmFn: () => void
}

export const confirmDirective = {
    created(btn: HTMLElement, binding: { value: Binding }) {
        btn.addEventListener('click', () => {
            const { message, confirmFn }= binding.value
            const bool = window.confirm(message)
            if (bool) {
                confirmFn()
            }
        })
    }
}