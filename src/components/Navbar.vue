<template>
    <h1>{{ title }}</h1>
    <Search :userName="name" @onSearch="listenSearch" />
</template>

<script lang="ts">
import Search from './Search.vue';

export default {
    data() {
        return {
            title: 'Mon App',
            name: 'ana'
        }
    },
    components: {
        Search
    },
    mounted() {
        setTimeout(() => {
            console.log('ok')
            this.name = 'ben'
        }, 2000)
    },
    methods: {
        listenSearch(userName: string) {
            console.log(userName)
        }
    }
}
</script>