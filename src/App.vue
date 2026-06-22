<script>
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

export default {
  data() {
    return {
      message: 'Hello World'
    }
  },
  components: {
    Navbar,
    Users
  }
}
</script>

<template>
  <Navbar />
  <Users />
</template>
