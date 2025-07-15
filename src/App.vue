<template>
    <Navbar :name="firstName" @onSearch="listenSearch" />
    <Users />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Users from './components/Users.vue';

export default {
    data() {
        return {
            firstName: 'ana'
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
    },
    mounted() {
        setTimeout(() => {
            this.firstName = 'ben'
        }, 1000)
    }
}
</script>
