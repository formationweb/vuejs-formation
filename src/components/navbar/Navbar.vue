<template>
    <h1>Mon App</h1>
    <Search :username="name" @on-search="listenSearch" />
    <RouterLink :to="{ name: 'loginId' }" custom v-slot="slotProps">
        <button @click="slotProps.navigate">Se connecter</button>
    </RouterLink>
</template>

<script setup lang="ts">
import { onMounted, ref, inject } from 'vue';
import Search from './Search.vue'
import type AppService from '@/services/app';

const name = ref('ana')
const appService = inject<AppService>('appService')

console.log(appService?.getTitle())

function listenSearch(username: string) {
    console.log(username)
}

onMounted(() => {
    console.log('test')
})
</script>