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
            name: 'ana'
        }
    },
    components: {
        Navbar,
        Users
    }
}
</script>