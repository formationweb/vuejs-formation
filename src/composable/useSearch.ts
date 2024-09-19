import { computed, ComputedRef, DefineProps, Ref, ref, watchEffect } from "vue";

type Props = DefineProps<{
    name: string
}, never>

type Emits = (event: 'on-search', name: string) => void

type SearchFnReturn = {
    localName: Ref<string>
    firstNames: Ref<string[]>
    onSearch: () => void,
    firstNamesFiltered: ComputedRef<string[]>
}

export function useSearch(props: Props, emits: Emits): SearchFnReturn {
  const localName = ref(props.name);
  const firstNames = ref(["ana", "jim", "ben"]);
  const firstNamesFiltered = computed(() => {
    return firstNames.value.filter(firstName => firstName.startsWith(localName.value))
  })

  function onSearch() {
    emits("on-search", localName.value);
  }

  watchEffect(() => {
    localName.value = props.name;
  });

  return {
    localName,
    firstNames,
    onSearch,
    firstNamesFiltered
  }
}
