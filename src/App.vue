<template>
    <Navbar :name="firstName" @onSearch="listenSearch" />
    <Users />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

let firstName = ref('ana')

function listenSearch(userName: string) {
    console.log(userName)
}

onMounted(() => {
    setTimeout(() => {
       firstName.value = 'ben'
    }, 1000)
})
</script>
