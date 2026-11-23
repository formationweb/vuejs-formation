function ref(defaultValue) {
    return {
        _value: defaultValue,
        get value() {
            return this._value
        },
        set value(newValue) {
            console.log('value modified')
            this._value = newValue
        }
    }
}

const nom = ref('ana')
const age = ref(12)

nom.value = 'ana'
age.value = 99

const isMinor = computed(() => age.value < 18)

console.log(isMinor.value) // false

    age.value = 12

    console.log(isMinor.value) // true


watchEffect(() => {
    console.log(isMinor.value)
})