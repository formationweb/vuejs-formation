import { ref, watchEffect, type DefineProps, type Ref } from "vue"

type Props = DefineProps<{
    name: string
}, never>

type Emits = (event: 'on-search', name: string) => void

type SearchFnReturn = {
    userName: Ref<string>
    firstNames: Ref<string[]>
    onSearch: () => void
}

export function useSearch(props: Props, emits: Emits): SearchFnReturn {
    let firstNames = ref(['ana', 'jim', 'ben'])
    const userName = ref(props.name)

    function onSearch() {
        emits('on-search', userName.value)
    }

    watchEffect(() => {
        userName.value = props.name
    })

    return {
        userName,
        firstNames,
        onSearch
    }
}