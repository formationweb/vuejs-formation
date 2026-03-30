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

const age = ref(18)
console.log(age.value)
age.value = 15