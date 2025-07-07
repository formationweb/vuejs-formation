<template>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name,index) in names" :key="index">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'

export default {
    props: {
        firstName: {
            type: String as PropType<string>,
            required: true
        }
    },
    emits: ['onSearch'],
    data() {
        return {
           userName: this.firstName,
           names: ['ana', 'jim', 'ben']
            
        }
    },
    methods: {
        search() {
            this.$emit('onSearch', this.userName)
        }
    },
    watch: {
        firstName(newVal: string) {
            this.userName = newVal
        }
    }
}
</script>