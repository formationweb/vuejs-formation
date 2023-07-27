<template>
    <h1>Mon App</h1>
    <Search :username="name" @on-search="listenSearch" />
    <RouterLink :to="{ name: 'loginId' }" custom v-slot="slotProps">
        <button @click="slotProps.navigate">Se connecter</button>
    </RouterLink>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Search from './Search.vue'

const name = ref('ana')

function listenSearch(username: string) {
    console.log(username)
}

onMounted(() => {
    console.log('test')
})
</script>