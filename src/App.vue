<template>
    {{ message }}
    <Navbar />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'

export default {
    data() {
        return {
            message: 'Mon App'
        }
    },
    components: {
        Navbar
    }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>