<template>
    <h1 :style="{ opacity: 1 }">My App</h1>
    <Search :firstName="name" @onSearch="listenSearch" />
</template>

<script lang="ts" setup>
import Search from './Search.vue'
import { onMounted, ref } from 'vue'

let name = ref('ana')

function listenSearch(userName: string) {
    console.log(userName)
}

onMounted(() => {
    setTimeout(() => {
        name.value = 'ben'
    }, 2000)
})
</script>

<style>
.red {
    color: red;
}


</style>