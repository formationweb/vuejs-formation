<template>
    <h1>{{ title }}</h1>
    <Search :name="username" @on-search="listenSearch" />
    <router-link :to="{ name: 'loginId' }" custom v-slot="router">
        <button @click="router.navigate">Se connecter</button>
    </router-link>
    
</template>

<script setup lang="ts">
import { AppService } from '@/services/app';
import { inject, onMounted, ref } from 'vue';
import Search from './Search.vue';

const title = ref('Mon App')
const username = ref('ben')
const app = inject<AppService>('appService')

console.log(app?.getTitle())

function listenSearch(username: string) {
    console.log(username)
}

onMounted(() => {
    console.log('ready')
})
</script>