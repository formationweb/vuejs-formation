<template>
    <h1>Navbar</h1>
    <input type="text" v-model="propName">
    <button @click="search" v-if="propName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in namesFiltered" :key="name">
           <p :class="{ red: index % 2 != 0, bold: true }">{{ index }} - {{ name }}</p>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { useSearch } from '../composables/useSearch';

const props = defineProps<{
    name: string
}>()

const emits = defineEmits<{
    onSearch: [string]
}>()

const { propName, search, namesFiltered } = useSearch(props, emits)
</script>

<style scoped>
.red {
    color: red;
}

.bold {
    font-weight: bold;
}
</style>