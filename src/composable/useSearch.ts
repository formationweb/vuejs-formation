import { storeToRefs } from "pinia";
import { ComputedRef, DefineProps, Ref, computed, ref, watch, watchEffect } from "vue";
import { useUserStore } from "../store/user";

type Props = DefineProps<
  {
    name: string;
  },
  never
>;
type Emits = (event: "on-search", name: string) => void;
type SearchFnReturn = {
  localName: Ref<string>;
  firstNames: Ref<string[]>;
  search: () => void;
  firstNamesFiltered: ComputedRef<string[]>
};

export function useSearch(props: Props, emits: Emits): SearchFnReturn {
  const localName = ref<string>(props.name);
  const userStore = useUserStore()
  const { users } =  storeToRefs(userStore)
  const firstNames = computed(() => users.value.map(user => user.name))
  const firstNamesFiltered = computed(() => {
    return firstNames.value.filter((firstName) => firstName.startsWith(localName.value))
  })
  
  function search() {
    emits("on-search", localName.value);
  }

  watchEffect(() => {
     console.log(localName.value, firstNames.value)
  })

  watch(
    () => props.name,
    (newVal) => {
      localName.value = newVal;
    }
  );

  return {
    localName,
    firstNames,
    search,
    firstNamesFiltered
  };
}
