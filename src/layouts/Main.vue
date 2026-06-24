<template>
  <Navbar :name="myName"  @onSearch="listenSearch" />
  <RouterView />
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';

const myName = 'ben'

function listenSearch(userName: string) {
  console.log(userName)
}
</script>

