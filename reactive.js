const age = ref(15)
const isMinor = ref(false)
const isMinor = computed(() => age.value < 18)

age.value = 20


watchEffect(() => {
   console.log(isMinor.value) // false
})