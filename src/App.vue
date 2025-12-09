<template>
  <!-- <Opacity color="black" :opacity="0.5" @change="console.log" /> -->
  <RouterView />
  <!-- <Draw /> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Opacity from './atomics/Opacity.vue'
import Draw from './components/Draw.vue'
</script>
