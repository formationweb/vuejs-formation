<template>
    <h1>{{ message }}</h1>
    <Navbar />
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
    data() {
        return {
            message: 'hello world'
        }
    },
    components: {
        Navbar
    }
}
</script>
