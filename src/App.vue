<template>
  <Navbar />
  {{ count }}
  <button v-on:click="increment">Augmenter de  1</button>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  components: {
    Navbar
  }
}
</script>