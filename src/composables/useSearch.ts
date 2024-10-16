import { computed, ref, watchEffect, type ComputedRef, type DefineProps, type Ref } from "vue"
import { useUserStore } from "../store/user"
import { storeToRefs } from "pinia"

type Props = DefineProps<{
    name: string
}, never>

type Emits = (event: 'on-search', name: string) => void

type SearchFnReturn = {
    userName: Ref<string>
    firstNames: Ref<string[]>,
    firstNamesFiltered: ComputedRef<string[]>
    onSearch: () => void
}

export function useSearch(props: Props, emits: Emits): SearchFnReturn {
    const userStore = useUserStore()
    const { firstNames } = storeToRefs(userStore)
    const userName = ref(props.name)

    const firstNamesFiltered = computed(() => {
        return firstNames.value.filter(firstName => firstName.startsWith(userName.value))
    })

    function onSearch() {
        emits('on-search', userName.value)
    }

    watchEffect(() => {
        userName.value = props.name
    })

    return {
        userName,
        firstNames,
        firstNamesFiltered,
        onSearch
    }
}