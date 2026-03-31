<template>
    <Navbar :name="userName" @onSearch="listenSearch" />
    <Users />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Users from '../components/Users.vue';

let userName = ref('ana')

console.log(userName.value)

function listenSearch(userNameVal: string) {
  console.log(userNameVal)
}

setTimeout(() => {
  userName.value = 'ben'
}, 1000)
</script>