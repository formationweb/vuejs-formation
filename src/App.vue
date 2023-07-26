<template>
    <Navbar />
    <Users />
</template>

<script lang="ts">
import Navbar from './components/navbar/Navbar.vue'
import Users from './components/user/Users.vue'

export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Users
    }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>