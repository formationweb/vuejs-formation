<template>
    <h1>Mon App</h1>
    <Search :name="userName" />
    <button @click="changeName">Changer le nom</button>
    <router-link :to="{ name: 'loginId' }" custom v-slot="router">
        <button @click="router.navigate">Se connecter</button>
    </router-link>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Search from './Search.vue'

let userName = ref('ana')

function changeName() {
    userName.value = 'ben'
}
</script>