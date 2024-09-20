type ConfirmFn = () => {}

export const confirmDirective = {
    created(btn: HTMLElement, binding: { value: ConfirmFn }) {
        btn.addEventListener('click', () => {
            const bool = window.confirm('Etes vous sûr ...')
            if (bool) binding.value()
        })
    }
}