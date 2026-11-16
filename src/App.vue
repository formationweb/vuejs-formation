<template>
  <Navbar />
  <h1>{{ title }}</h1>
  <button v-on:click="changeTitle">Changer titre</button>
</template>

<script>
import Navbar from './components/Navbar.vue';

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
  },
  components: {
    Navbar
  }
}
</script>

<style>

</style>