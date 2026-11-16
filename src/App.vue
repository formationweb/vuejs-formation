<template>
  <h1>{{ title }}</h1>
  <button v-on:click="changeTitle">Changer titre</button>
</template>

<script>
export default {
  data() {
    return {
      title: 'My App'
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Nouveau titre'
    }
  }
}
</script>

<style>

</style>