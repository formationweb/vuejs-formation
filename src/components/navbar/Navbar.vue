<template>
    <h1>Mon App</h1>
    <Search :username="name" @on-search="listenSearch" />
</template>

<script lang="ts">
import Search from './Search.vue'

export default {
    data() {
        return {
            name: 'ana'
        }
    },
    methods: {
        listenSearch(username: string) {
            console.log(username)
        }
    },
    mounted() {
        setTimeout(() => {
            this.name = 'jim'
        }, 2000)
    },
    components: {
        Search
    }
}
</script>