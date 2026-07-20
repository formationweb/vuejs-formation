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