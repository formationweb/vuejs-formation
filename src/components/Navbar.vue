<template>
    <h1>Navbar</h1>
    <Search :userName="defaultName" @onSearch="listenSearch" />
</template>

<script lang="ts">
import Search from './Search.vue';

export default {
    data() {
        return {
            defaultName: 'ben'
        }
    },
    methods: {
        listenSearch(userName: string) {
            console.log(userName)
        }
    },
    components: {
        Search
    }
}
</script>