<template>
    <input type="text" v-model="name">
    <button @click="search">Rechercher</button>
</template>

<script lang="ts">
export default {
    props: {
        userName: {
            type: String,
            required: true
        }
    },
    emits: ['onSearch'],
    data() {
        return {
            name: this.userName
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.name)
        }
    }
}
</script>