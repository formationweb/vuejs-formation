<template>
    <h1>Mon App</h1>
    <Search :userName="name" @onSearch="listenSearch($event)" />
</template>

<script lang="ts">
import Search from './Search.vue';

export default {
    data() {
        return {
            name: 'ben'
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
        // setTimeout(() => {
        //     this.name = 'nouvelle valeur'
        // }, 3000)
    }
}
</script>