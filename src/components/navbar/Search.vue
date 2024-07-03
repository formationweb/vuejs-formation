<template>
    <input type="text" v-model="localName">
    <button @click="search">Rechercher</button>
</template>

<script lang="ts">
export default {
    props: ['name'],
    data() {
        return {
            localName: this.name
        }
    },
    methods: {
        search() {
            console.log(this.localName)
        }
    },
    watch: {
        name(newVal) {
            this.localName = newVal
        }
    }
}
</script>