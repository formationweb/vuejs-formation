import { computed, ref, type DefineProps } from "vue";

type Props = DefineProps<{
    userName: string
}, never>

type Emits = (eventName: 'onSearch', eventValue: string) => void

export function useSearch(props: Props, emits: Emits) {
  const name = ref(props.userName);
  const names = ref(["ana", "ben", "jim"]);
  const namesFiltered = computed(() => {
    return names.value.filter((n) => n.startsWith(name.value));
  });

  function search() {
    emits("onSearch", name.value);
  }

  return {
    name,
    names,
    namesFiltered,
    search
  }
}
