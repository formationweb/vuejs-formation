<template>
    <input type="text" v-model="name">
    <button @click="search" v-if="name != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstNames" :key="index">
          {{ index }} - {{ name }}
        </li>
    </ul>
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
            name: this.userName,
            firstNames: ['ana', 'ben', 'jim']
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.name)
        }
    },
    watch: {
        userName(newValue) {
            this.name = newValue
        }
    }
}
</script>