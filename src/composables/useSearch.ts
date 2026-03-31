import { computed, reactive, ref, watchEffect, type DefineProps } from "vue"

type Props = DefineProps<{
    name: string
}, never>

type Emits = (eventName: 'onSearch', nameValue: string) => void

export function useSearch(props: Props, emits: Emits) {
    const propName = ref(props.name)
    const names = reactive<string[]>(['ana', 'ben', 'jim'])
    const namesFiltered = computed(() => {
        return names.filter(name => name.startsWith(propName.value))
    })

    function search() {
        emits('onSearch', propName.value)
    }

    watchEffect(() => {
        propName.value = props.name
    })

    return {
        propName,
        search,
        namesFiltered
    }
}