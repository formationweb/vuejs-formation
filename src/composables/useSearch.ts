import { computed, ref, watchEffect, type ComputedRef, type DefineProps, type Ref } from "vue"

type Props = DefineProps<{
    name?: string
}, never>

type Emits = (eventName: 'onSearch', nameValue: string) => void

type SearchReturn = {
    firstNames: Ref<string[]>;
    firstNamesFiltered: ComputedRef<string[]>;
    userName: Ref<string | undefined>;
    search: () => void;
}

export function useSearch(props: Props, emits: Emits): SearchReturn {
    const firstNames = ref(['ana', 'ben', 'jim'])
    const userName = ref<string | undefined>(props.name)

    const firstNamesFiltered = computed(() => {
        return firstNames.value.filter(str => str.startsWith(userName.value ?? ''))
    })

    function search() {
        emits('onSearch', userName.value ?? '')
    }

    watchEffect(() => {
        userName.value = props.name
    })

    return {
        firstNames,
        firstNamesFiltered,
        userName,
        search
    }
}