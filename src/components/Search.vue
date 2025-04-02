<template>
    <input type="text" v-model="firstName" />
    <button @click="search" v-if="firstName != ''">Rechercher</button>
    <p v-else>Rentrez un texte !</p>
    <ul>
        <li v-for="(name, index) in names" :key="index">
            {{ name }}
        </li>
        <!-- <li v-for="(val, key) in myObj" :key="key">
           {{  key }} - {{ val }}
        </li> -->
    </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'

export default {
    props: {
        userName: {
            type: String as PropType<string>,
            required: true
        }
    },
    emits: ['onSearch'],
    data() {
        return {
            firstName: this.userName,
            names: ['ana', 'jim', 'ben'],
            // myObj: {
            //     name: 'ana',
            //     age: 18
            // }
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.firstName)
        }
    },
    watch: {
        userName(newVal: string) {
           this.firstName = newVal
        }
    }
}
</script>