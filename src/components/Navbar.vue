<template>
  <input type="text" v-model="userName" />
  <button @click="search" v-if="userName != ''">Rechercher</button>
  <ul>
    <li v-for="(name, index) in names" :key="name">{{ index }} - {{ name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref, type PropType } from "vue";

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
