import { computed, ref, watchEffect, type DefineProps } from "vue";

type Props = DefineProps<{
    userName: string
}, never>

type Emits = (eventName: 'runSearch', nameValue: string) => void

export function useSearch(props: Props, emits: Emits) {
  const localUserName = ref(props.userName);
  const names = ref(["ana", "ben", "jim", "benjamin", "benfeoef"]);
  const namesFiltered = computed(() => {
    return names.value.filter((name) => name.includes(localUserName.value));
  });

  function search() {
    emits("runSearch", localUserName.value);
  }

  watchEffect(() => {
    localUserName.value = props.userName;
  });

  watchEffect(() => {
    console.log(localUserName.value);
  });

  return {
    localUserName,
    names,
    namesFiltered,
    search
  }
}
