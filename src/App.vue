<template>
  <Opacity color="black" :opacity="0.5" @change="console.log" />
  <!-- <Navbar :name="firstName"  @onSearch="listenSearch" />
  <Users /> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/Navbar.vue'
import Users from './components/Users.vue';
import Opacity from './atomics/Opacity.vue'

let firstName = ref('ben')

function listenSearch(userName: string) {
  console.log(userName)
}

// setTimeout(() => {
//   firstName.value = 'jim'
// }, 2000)
</script>
