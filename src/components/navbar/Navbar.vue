<template>
    <h1>{{ title }}</h1>
    <Search :name="username" />
</template>

<script lang="ts">
import Search from './Search.vue';

export default {
    data() {
        return {
            title: 'Mon App',
            username: 'ben'
        }
    },
    // mounted() {
    //     setTimeout(() => {
    //         this.username = 'jim'
    //     }, 2000)
    // },
    components: {
        Search
    }
}
</script>