<template>
  <input type="text" v-model="userName" />
  <button @click="search" v-if="userName != ''">Rechercher</button>
  <ul>
    <li :class="{ even: index % 2 == 0, bold: true }"
    v-for="(name, index) in autocompleteNames" :key="name">{{ index }} - {{ name }}</li>
  </ul>
  <!-- <select v-model="color">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
  <div class="color-preview" :style="{ backgroundColor: color }"></div> -->
  <!-- <RouterLink :to="{ name: 'loginId' }" custom v-slot="router">
    <button @click="router.navigate">Se connecter</button>
  </RouterLink> -->
  <button @click="router.push({ name: 'loginId' })">Se connecter</button>
</template>

<script setup lang="ts">
import { useSearch } from "@/composables/useSearch";
import { computed, ref, type PropType } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

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

const { userName, autocompleteNames, search } = useSearch(props, emits)
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
