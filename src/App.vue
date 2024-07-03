<template>
    {{ count }}
    <Navbar />
</template>

<script lang="ts">
import Navbar from './components/navbar/Navbar.vue';

export default {
    data() {
        return {
            count: 0
        }
    },
    components: {
        Navbar
    }
}
</script>