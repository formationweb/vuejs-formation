<template>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">
        Rechercher
    </button>
    <ul>
        <li v-for="(name, index) in names" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'

export default {
    props: {
        name: {
            type: String,
            // type: Object as PropType<??>
            required: true
        }
    },
    emits: ['onSearch'],
    data() {
        return {
            names: ['ana', 'ben', 'jim'],
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

<style>

</style>
