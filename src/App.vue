<template>
  <Navbar :name="myName"  @onSearch="listenSearch" />
  <Users />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

const myName = 'ben'

function listenSearch(userName: string) {
  console.log(userName)
}
</script>
