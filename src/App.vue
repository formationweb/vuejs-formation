<template>
    <Navbar />
    <Users />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import Users from './components/Users.vue'

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