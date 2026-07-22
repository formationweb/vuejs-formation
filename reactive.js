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

const name = ref("ana");

// const user = ref({
//   name: '',
//   address: ref({
//     city: 'paris'
//   })
// })

function reactive(obj) {
  return new Proxy(obj, {
    get(obj, prop) {
      return obj[prop];
    },
    set(obj, prop, val) {
      console.log("rendu !");
      obj[prop] = val;
      return true;
    },
  });
}

const user = reactive({
  name: 'ana'
})

user.name = 'ben'