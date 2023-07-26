import { reactive, ref, watch } from 'vue'

export function useSearch(props: any, emits: any) {
    const localUsername = ref(props.username)
    const firstnames = reactive([ 'ana', 'jim', 'ben' ])

    watch(() => props.username, (newVal) => {
        localUsername.value = newVal
    })

    function search(str: string, event: any) {
        emits('onSearch', localUsername.value)
    }

    return {
        localUsername,
        firstnames,
        search
    }
}