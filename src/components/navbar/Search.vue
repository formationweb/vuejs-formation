<template>
    <input type="text" v-model="localUsername">
    <button @click="search('hello', $event)" v-if="localUsername">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstnames" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>

</template>

<script setup lang="ts">
import { useSearch } from '@/composable/useSearch'

const props = defineProps(['username'])
const emits = defineEmits(['onSearch'])

const { localUsername, firstnames, search } =  useSearch(props, emits)
</script>