<template>
    <input type="text" v-model="localName">
    <button @click="search" v-if="localName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstNamesFiltered" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useSearch } from '../../composable/useSearch';

const props = defineProps<{
    name: string
}>()
const emits = defineEmits(['on-search'])

const { localName, search, firstNamesFiltered } = useSearch(props, emits)
</script>