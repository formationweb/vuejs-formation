<template>
    <h1 ref="elTitle">{{  title  }}</h1>
    <!-- peut être écrit par @on-search="listenSearch($event)" -->
    <Search :name="myName" @on-search="listenSearch" />
    <!-- <button @click="changeName">Changer le nom</button> -->
     <router-link :to="{ name: 'loginId' }" custom v-slot="router">
        <button @click="router.navigate">Se connecter</button>
     </router-link>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue';
import Search from './Search.vue';

let title = ref('My App')
const myName = ref('ana')
const h1 = useTemplateRef('elTitle')

function changeName() {
    myName.value = 'ben'
}

function listenSearch(userName: string) {
    console.log(userName)
}
</script>