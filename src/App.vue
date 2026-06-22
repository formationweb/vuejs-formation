<script>
import Navbar from './components/Navbar.vue';

export default {
  data() {
    return {
      message: 'Hello World'
    }
  },
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar />
  {{  message }}
</template>
