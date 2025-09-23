<template>
    <input type="text" v-model="name">
    <button @click="search" v-if="name != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstNamesFiltered" :key="index">
          {{ name }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { useSearch } from '../composables/useSearch';

const props = defineProps<{
    userName: string
}>()

const emit = defineEmits<{
    onSearch: [string]
}>()

const { name, firstNamesFiltered, search } = useSearch(props, emit)
</script>