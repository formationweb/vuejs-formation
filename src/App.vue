<template>
  <Navbar />
 <button v-on:click="changeTitle">Changer titre</button>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      title: 'Mon App'
    }
  },
  methods: {
    changeTitle() {
      this.title = 'test'
    }
  },
  components: {
    Navbar
  }
}
</script>