<template>
    <Navbar />
    <Users />
</template>

<script lang="ts">
import Users from './components/Users.vue'
import Navbar from './components/Navbar.vue'

export default {
    data() {
        return {
            name: 'ana'
        }
    },
    components: {
        Navbar, 
        Users
    }
}
</script>