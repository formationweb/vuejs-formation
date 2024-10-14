<template>
    <h1>Navbar</h1>
    <!-- peut être écrit par @on-search="listenSearch($event)" -->
    <Search :name="myName" @on-search="listenSearch" />
    <button @click="changeName">Changer le nom</button>
</template>

<script lang="ts">
import Search from './Search.vue';

export default {
    data() {
        return {
            myName: 'ben'
        }
    },
    methods: {
        listenSearch(userName: string) {
            console.log(userName)
        },
        changeName() {
            this.myName = ''+Math.random()
        }
    },
    components: {
        Search
    }
}
</script>