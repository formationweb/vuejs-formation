import { computed, ref, watchEffect, type DefineProps, type Ref } from "vue"

type Props = DefineProps<{
    userName: string
}, never>

type Emits = (event: 'onSearch', name: string) => void

type SearchReturn = {
    firstNames: Ref<string[]>
    name: Ref<string>
    firstNamesFiltered: Ref<string[]>
    search: () => void
}

export function useSearch(props: Props, emit: Emits): SearchReturn {
    const firstNames = ref(['ana', 'ben', 'jim'])
    const name = ref(props.userName)
    const firstNamesFiltered = computed(() => {
        return firstNames
        .value.filter(firstName => firstName.startsWith(name.value))
    })

    function search() {
        emit('onSearch', name.value)       
    }

    watchEffect(() => {
        name.value = props.userName
    })

    return {
        firstNames,
        name,
        firstNamesFiltered,
        search
    }
}