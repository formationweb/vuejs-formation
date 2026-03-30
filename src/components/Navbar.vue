<template>
    <h1>Navbar</h1>
    <input type="text" v-model="propName">
    <button @click="search" v-if="propName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in names" :key="name">
           {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    emits: ['onSearch'],
    data() {
        return {
            propName: this.name,
            names: ['ana', 'ben', 'jim'],
            obj: {
                name: 'ana',
                age: 18
            }
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.name)
        }
    },
    watch: {
        name(newValue: string) {
            this.propName = newValue
        }
    }
}
</script>