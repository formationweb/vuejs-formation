const age = ref(15)
const isMinor = computed(() => age.value < 18)

watchEffect(() => {
    console.log(isMinor.value) // tt
})

age.value = 50
console.log(isMinor.value) // false

