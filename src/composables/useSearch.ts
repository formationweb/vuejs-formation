import { computed, reactive, ref, watch, watchEffect, type ComputedRef, type DefineProps, type Ref } from "vue"
import { useUserStore } from "../store/user"
import { storeToRefs } from "pinia"

type Props = DefineProps<{
    userName: string
}, never>

type Emits = (event: 'onSearch', name: string) => void

type SearchReturn = {
    firstName: Ref<string>
    namesFiltered: ComputedRef<string[]>
    names: ComputedRef<string[]>,
    search: () => void
}

export function useSearch(props: Props, emits: Emits): SearchReturn {
    const userStore = useUserStore()
    let firstName = ref(props.userName)
    const { names } =  storeToRefs(userStore)

    const namesFiltered = computed(() => {
        return names.value.filter(name => name.startsWith(firstName.value))
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