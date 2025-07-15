<template>
    <Navbar />
    <Users />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

export default {
    data() {
        return {
            message: 'hello world'
        }
    },
    components: {
        Navbar,
        Users
    }
}
</script>
