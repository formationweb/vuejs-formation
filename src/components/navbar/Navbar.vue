<template>
    <h1>Mon App</h1>
    <Search :username="name" @onSearch="listenSearch" />
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
        listenSearch() {
            console.log('ok')
        }
    },
    components: {
        Search
    }
}
</script>