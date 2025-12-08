<template>
    <h1>Navbar</h1>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) of firstNames" :key="name">
          {{  index }} - {{ name }}
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    props: {
        name: {
            type: String,
            default: 'test'
        }
    },
    emits: ['onSearch'],
    data() {
        return {
            firstNames: ['ana', 'ben', 'jim'],
            userName: this.name
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.userName)
        }
    }
}
</script>
