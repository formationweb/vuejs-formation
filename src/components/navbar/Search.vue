<template>
    <input type="text" v-model="localName">
    <button @click="search" v-if="localName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstNames" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    props: ['name'],
    emits: ['on-search'],
    data() {
        return {
            localName: this.name,
            firstNames: ['ana', 'jim', 'ben']
        }
    },
    methods: {
        search() {
            this.$emit('on-search', this.localName)
        }
    },
    watch: {
        name(newVal) {
            this.localName = newVal
        }
    }
}
</script>