<template>
    <h1>{{  title  }}</h1>
    <!-- peut être écrit par @on-search="listenSearch($event)" -->
    <Search :name="myName" @on-search="listenSearch" />
    <button @click="changeName">Changer le nom</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Search from './Search.vue';

let title = ref('My App')
const myName = ref('ana')

function changeName() {
    myName.value = 'ben'
}

function listenSearch(userName: string) {
    console.log(userName)
}
</script>