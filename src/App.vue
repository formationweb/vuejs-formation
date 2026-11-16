<template>
  <Navbar :userName="name" @runSearch="listenSearch" />
  <Users />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

export default {
  components: {
    Navbar,
    Users
  },
  data() {
    return {
      name: 'ben'
    }
  },
  methods: {
    listenSearch(userName: string) {
      console.log(userName)
    }
  }
}
</script>