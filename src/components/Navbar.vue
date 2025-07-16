<template>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in names" :key="index">
            {{ name }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { useSearch } from '@/composables/useSearch';

const props = defineProps<{
    name: string
}>()

const emits = defineEmits<{
    onSearch: [string] 
}>()

const { userName, names, search } = useSearch(props, emits)
</script>