function ref(defaultValue) {
  return {
    _value: defaultValue,
    get value() {
      return this._value;
    },
    set value(val) {
      console.log("système render");
      this._value = val;
    },
  };
}

const name = ref('')
name.value = 'ben'

const age = ref(18)
age.value = 15

const isMinor = computed(() => age.value < 18)
console.log(isMinor.value)

watchEffect(() => {
  console.log(age.value)
})