<template>
    <Navbar />
    <button v-on:click="changeTitle">Changer titre</button>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'

export default {
    data() {
        return {
            title: 'Mon App'
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Nouveau titre'
        }
    },
    components: {
        Navbar
    }
}
</script>