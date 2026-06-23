<template>
  <input type="text" v-model="userName" />
  <button @click="search" v-if="userName != ''">Rechercher</button>
  <ul>
    <li :class="{ even: index % 2 == 0, bold: true }"
    v-for="(name, index) in names" :key="name">{{ index }} - {{ name }}</li>
  </ul>
  <select v-model="color">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
  <div class="color-preview" :style="{ backgroundColor: color }"></div>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";

const color = ref('')

// écriture JS
// const props = defineProps({
//   name: {
//     type: String,
//     required: true,
//   },
// });

// écriture si TS activé
const props = defineProps<{
    name: string
}>();

const emits = defineEmits<{
    onSearch: [string]
}>()

const names = ["ana", "ben", "jim"];
const userName = ref(props.name)

function search() {
    emits('onSearch', userName.value)
}
</script>

<style scoped>
.even {
  color: red;
}

.bold {
  font-weight: bold;
}

.color-preview {
  width: 100px;
  height: 100px;
}
</style>
