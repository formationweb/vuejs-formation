<template>
    <h1>Mon App</h1>
    <Search :name="userName" />
    <button @click="changeName">Changer le nom</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Search from './Search.vue'

let userName = ref('ana')

function changeName() {
    userName.value = 'ben'
}
</script>