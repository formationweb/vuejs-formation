import { ref, watchEffect, type DefineProps, type Ref } from "vue"

type Props = DefineProps<{
    name: string
}, never>

type Emits = (event: 'onSearch', name: string) => void

type SearchReturn = {
    userName: Ref<string>
    names: string[]
    search: () => void
}

export function useSearch(props: Props, emits: Emits): SearchReturn  {
    const userName = ref(props.name)
    const names = ['ana', 'jim', 'ben']

    function search() {
        emits('onSearch', userName.value)
    }

    watchEffect(() => {
        userName.value = props.name // ben
    })

    return {
        userName,
        names,
        search
    }
}