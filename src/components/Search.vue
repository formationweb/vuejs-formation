<template>
    <input type="text" v-model="firstName" />
    <button @click="search" v-if="firstName != ''">Rechercher</button>
    <p v-else>Rentrez un texte !</p>
   <ul>
        <li v-for="name in namesFiltered">
            {{ name }}
        </li>
   </ul>
</template>

<script lang="ts" setup>
import { useSearch } from '../composables/useSearch';

const props = defineProps<{
    userName: string
}>()

const emits = defineEmits<{
    'onSearch': [string]
}>()

const {
    firstName,
    namesFiltered,
    search
} = useSearch(props, emits)
</script>