function ref(defaultValue) {
  return {
    _value: defaultValue,
    get value() {
      return this._value;
    },
    set value(val) {
      console.log("render");
      this._value = val;
    },
  };
}

const age = ref(15)
const isMinor = computed(() => age.value < 18)

console.log(isMinor.value) // true

age.value = 20

console.log(isMinor.value)  // false

watchEffect(() => {
   console.log(age.value) // 20
})

age.value = 25




const array = [1, 2, 3].map(el => el * 2)