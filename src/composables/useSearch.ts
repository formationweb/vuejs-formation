import { ref, watch } from "vue"

export function useSearch(props: any, emits: any) {
    let firstName = ref(props.userName)
    const names = ['ana', 'jim', 'ben']

    function search() {
        emits('onSearch', firstName.value)
    }

    watch(props, (obj) => {
        firstName.value = obj.userName
    })

    return {
        firstName,
        names,
        search
    }
}