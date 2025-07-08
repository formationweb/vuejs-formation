const age = ref(42)
const isMinor = computed(() => age.value < 18)

console.log(isMinor.value) // false

age.value = 15

console.log(isMinor.value) // true