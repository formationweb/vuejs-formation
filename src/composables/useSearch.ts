import { computed, ref, watchEffect, type ComputedRef, type DefineProps, type Ref } from "vue"

type Props = DefineProps<{
    name: string
}, never>

type Emits = (event: 'onSearch', name: string) => void

type SearchReturn = {
    userName: Ref<string>
    names: Ref<string[]>
    search: () => void
    namesFiltered: ComputedRef<string[]>
}

export function useSearch(props: Props, emits: Emits): SearchReturn  {
    const userName = ref(props.name)
    const names = ref(['ana', 'jim', 'ben'])
    const namesFiltered = computed(() => {
        return names.value.filter((name) => name.startsWith(userName.value))
    })

    function search() {
        emits('onSearch', userName.value)
    }

    watchEffect(() => {
        userName.value = props.name // ben
    })

    return {
        userName,
        names,
        namesFiltered,
        search
    }
}