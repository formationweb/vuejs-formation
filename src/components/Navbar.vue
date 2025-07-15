<template>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in names" :key="index">
            {{ name }}
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    props: ['name'],
    emits: ['onSearch'],
    data() {
        return {
           userName: this.name,
           names: ['ana', 'jim', 'ben']
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.userName)
        }
    },
    watch: {
        name(newValue) {
            this.userName = newValue
        }
    }
}
</script>