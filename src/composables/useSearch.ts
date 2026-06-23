import { computed, ref, type DefineProps } from "vue";

type Props = DefineProps<{
    name: string
}, never> 

type Emits = (eventName: 'onSearch', newValue: string) => void

export function useSearch(props: Props, emits: Emits) {
    const names = ref<string[]>(["ana", "ben", "jim"]);
    const userName = ref(props.name)
    const autocompleteNames = computed(() => {
    return names.value.filter((name) => name.includes(userName.value))
    })

    function search() {
        emits('onSearch', userName.value)
    }

    return {
        names,
        userName,
        autocompleteNames,
        search
    }
}