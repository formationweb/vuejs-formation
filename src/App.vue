<template>
  {{ count }}
  <button v-on:click="increment">Augmenter de  1</button>
</template>

<script lang="ts">
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
  }
}
</script>