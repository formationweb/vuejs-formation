<template>
    <input type="text" v-model="localUsername">
    <button @click="search('hello', $event)" v-if="localUsername">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstnames">
            {{ index }} - {{ name }}
        </li>
    </ul>
    
</template>

<script lang="ts">
export default {
    props: ['username'],
    emits: ['onSearch'],
    data() {
        return {
            localUsername: this.username,
            firstnames: ['ana', 'jim', 'ben']
        }
    },
    watch: {
        username(newVal) {
            this.localUsername = newVal
        }
    },
    methods: {
        search(str: string, event?: any) {
            this.$emit('onSearch', this.localUsername)
        }
    }
}
</script>