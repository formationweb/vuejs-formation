<template>
    <h1>{{ title }}</h1>
    <Search :name="username" @on-search="listenSearch"  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Search from './Search.vue';

const title = ref('Mon App')
const username = ref('ben')

function listenSearch(username: string) {
    console.log(username)
}

onMounted(() => {
    console.log('ready')
})
</script>