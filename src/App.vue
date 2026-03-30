<template>
  <Navbar :name="userName" @onSearch="listenSearch" />
  <Users />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

export default {
  data() {
    return {
      count: 0,
      userName: 'ana'
    }
  },
  methods: {
    increment() {
      this.count++
    },
    listenSearch(userName: string) {
      console.log(userName)
    }
  },
  components: {
    Navbar,
    Users
  },
  mounted() {
    setTimeout(() => {
      this.userName = 'ben'
    }, 1000)
  },
}
</script>

<style scoped>
.red {
  color: red;
}
</style>