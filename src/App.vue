<template>
    <Navbar />
    <h1>{{ name }}</h1>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'

export default {
    data() {
        return {
            name: 'ana'
        }
    },
    components: {
        Navbar
    }
}
</script>