<template>
  <Navbar userName="ana" @onSearch="listenSearch" />
  <Users />
  <!-- <Draw /> -->
</template>

<script setup lang="ts">
import Draw from './components/Draw.vue';
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

function listenSearch(userName: string) {
  console.log(userName)
}
</script>

