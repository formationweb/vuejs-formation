<template>
    <h1>My navbar</h1>
    <Search :name="userName" @on-search="listenSearch" />
    <!-- <button @click="changeName">Changer le nom</button> -->
</template>

<script lang="ts">
import Search from './Search.vue'

export default {
    data() {
        return {
            userName: 'ana'
        }
    },
    methods: {
        changeName() {
            this.userName = 'ben'
        },
        listenSearch(userName: string,) {
            console.log(userName)
        }
    },
    components: {
        Search
    }
}
</script>