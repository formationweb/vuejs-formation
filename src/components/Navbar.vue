<template>
    <h1>{{ title }}</h1>
    <Search :userName="name" @onSearch="listenSearch" />
    <RouterLink :to="{ name: 'loginId' }" custom v-slot="router">
        <button @click="router.navigate">Se connecter</button>
    </RouterLink>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Search from './Search.vue';

const title = ref('Mon App')
const name = ref('ana')

function listenSearch(userName: string) {
    console.log(userName)
}

onMounted(() => {
    setTimeout(() => {
        name.value = 'ben'
    }, 2000)
})
</script>