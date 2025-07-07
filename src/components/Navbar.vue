<template>
    <h1>My App</h1>
    <Search :firstName="name" @onSearch="listenSearch" />
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
        listenSearch(userName: string) {
            console.log(userName)
        }
    },
    components: {
        Search
    },
    mounted() {
        setTimeout(() => {
            this.name = 'ben'
        }, 2000)
    }
}
</script>