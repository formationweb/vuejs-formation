<template>
    <input type="text" :value="username">
    <button @click="search('hello', $event)">Rechercher</button>
</template>

<script lang="ts">
export default {
    props: ['username'],
    data() {
        return {}
    },
    methods: {
        search(str: string, event?: any) {
            this.$emit('onSearch', this.username)
        }
    }
}
</script>