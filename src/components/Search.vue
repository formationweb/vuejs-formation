<template>
    <input type="text" v-model="name">
    <button @click="search" v-if="name != ''">Rechercher</button>
    <div v-else>Rien</div>
    <ul>
        <li v-for="(nom, index) in names" :key="nom" 
        :class="index % 2 == 0 ? 'red' : ''">
            {{ index }} - {{ nom }}
        </li>
        <!-- <li v-for="(val, key) in config" :key="key">
            {{ key }} - {{ val }}
        </li> -->
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
            names: ['ana', 'ben', 'jim'],
            config: {
                url: 'http://',
                port: 3000
            }
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.name)
        }
    }
}
</script>

<style scoped>
.red {
    color: red;
}
</style>