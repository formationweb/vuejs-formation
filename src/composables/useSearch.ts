import { computed, ref, watchEffect, type ComputedRef, type DefineProps, type Ref } from "vue"

type Props = DefineProps<{
    firstName: string
}, never>

type Emits = (event: 'onSearch', name: string) => void

type SearchReturn = {
    namesFiltered: ComputedRef<string[]>
    userName: Ref<string>,
    names: Ref<string[]>,
    search: () => void
}

export function useSearch(props: Props, emits: Emits): SearchReturn {
    const { firstName } = props
    const userName = ref(firstName)
    //const userName = computed(() => props.firstName)
    const names = ref(['ana', 'jim', 'ben'])
    const namesFiltered = computed(() => {
        return names.value.filter(name => name.startsWith(userName.value))
    })

    function search() {
        emits('onSearch', userName.value)
    }

    watchEffect(() => {
        userName.value = props.firstName
    })

    return {
        userName,
        names,
        search,
        namesFiltered
    }
}