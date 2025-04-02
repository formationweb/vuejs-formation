<template>
    <h1>Mon App</h1>
    <Search :userName="name" @onSearch="listenSearch($event)" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue' 
import Search from './Search.vue';

let name = ref('ben')

function listenSearch(userName: string) {
    console.log(userName)
}

onMounted(() => {
  setTimeout(() => {
    name.value = 'test'
    console.log('test')
  }, 3000)  
})
</script>