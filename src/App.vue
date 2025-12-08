<template>
  <Navbar :name="firstName"  @onSearch="listenSearch" />
  <Users />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue'
import Users from './components/Users.vue';

let firstName = ref('ben')

function listenSearch(userName: string) {
  console.log(userName)
}

// setTimeout(() => {
//   firstName.value = 'jim'
// }, 2000)
</script>
