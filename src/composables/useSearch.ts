import { computed, reactive, ref, watch, watchEffect, type ComputedRef, type DefineProps, type Ref } from "vue"

type Props = DefineProps<{
    userName: string
}, never>

type Emits = (event: 'onSearch', name: string) => void

type SearchReturn = {
    firstName: Ref<string>
    namesFiltered: ComputedRef<string[]>
    names: string[],
    search: () => void
}

export function useSearch(props: Props, emits: Emits): SearchReturn {
    let firstName = ref(props.userName)
    let names = reactive<string[]>(['ana', 'ben', 'jim'])

    const namesFiltered = computed(() => {
        return names.filter(name => name.startsWith(firstName.value))
    })

    function search() {
        emits('onSearch', firstName.value)
    }

    // watch(props, (obj) => {
    //     firstName.value = obj.userName
    // })

    watchEffect(() => {
        firstName.value = props.userName
    })

    return {
        firstName,
        namesFiltered,
        names,
        search
    }
}