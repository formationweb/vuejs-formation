<template>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name,index) in namesFiltered" :key="index">
            {{ index }} - {{ name }}
        </li>
    </ul>
    {{ firstName  }}
</template>

<script lang="ts" setup>
import { useSearch } from '../composables/useSearch';

const props = defineProps<{
    firstName: string
}>()

const emits = defineEmits<{
    'onSearch': [string]
}>()

const { userName, search, namesFiltered } = useSearch(props, emits)
</script>