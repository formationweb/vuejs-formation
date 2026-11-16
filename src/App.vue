<template>
   <Navbar :userName="name" @runSearch="listenSearch" />
  <Users />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Users from './components/Users.vue';
import Navbar from './components/Navbar.vue';

let name = ref('ben')

function listenSearch(userName: string) {
  console.log(userName)
}
</script>