<script lang="ts">
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

export default {
  data() {
    return {
      message: 'Hello World',
      myName: 'ben'
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
  }
}
</script>

<template>
  <Navbar :name="myName"  @onSearch="listenSearch" />
  <Users />
</template>
