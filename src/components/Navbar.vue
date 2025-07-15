<template>
    <input type="text" v-model="name">
    <button @click="search">Rechercher</button>
</template>

<script>
export default {
    data() {
        return {
            name: 'ana'
        }
    },
    methods: {
        search() {
            console.log(this.name)
        }
    }
}
</script>