<template>
    <h1>Navbar</h1>
    <Search :userName="defaultName" @onSearch="listenSearch" />
    <!-- <RouterLink to="/login" custom v-slot="router">
        <button @click="router.navigate">Se connecter</button>
    </RouterLink> -->
    <button @click="router.push({ name: 'loginId' })">Se connecter</button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Search from './Search.vue';

const router = useRouter()

const defaultName = 'ben'

function listenSearch(userName: string) {
    console.log(userName)
}

</script>