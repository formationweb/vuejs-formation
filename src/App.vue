<template>
  <Navbar :name="firstName"  @onSearch="listenSearch" />
  <Users />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import Users from './components/Users.vue';

export default {
  data() {
    return {
      firstName: 'ben'
    }
  },
  methods: {
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
      this.firstName = 'jim'
    }, 2000)
  }
}
</script>
