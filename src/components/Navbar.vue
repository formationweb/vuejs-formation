<template>
    <h1>Navbar</h1>
    <input type="text" v-model="localUserName">
    <button @click="search" v-if="localUserName != ''">Rechercher</button>
    <div v-else>
        Vide
    </div>
    <ul>
        <li v-for="(name, index) in names" :key="name">
            {{ index }} - {{ name }}
        </li>
        <!-- <li v-for="(value, key) in config" :key="key">
            {{ key }} - {{  value }}
        </li> -->
    </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue';

export default {
    props: {
        userName: {
            type: String,
            required: true
        },
        myObject: {
            type: Object as PropType<{
                url: string
            }>
        }
    },
    emits: ['runSearch'],
    data() {
        return {
            names: ['ana', 'ben', 'jim'],
            config: {
                url: 'example.com',
                port: 3000
            },
            localUserName: this.userName
        }
    },
    methods: {
        search() {
            this.$emit('runSearch', this.localUserName)
        }
    }
}
</script>