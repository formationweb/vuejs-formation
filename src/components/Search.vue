<template>
    <input type="text" v-model="localName">
    <button @click="onSearch" v-if="localName != ''">Rechercher</button>
    <!-- <div v-else-if="name ='ana'">Le nom est ana</div>
    <div v-else>Aucun bouton</div> -->
    <ul>
        <li v-for="(name, index) in firstNames" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script lang="ts">
import { PropType } from 'vue';

export default {
    props: {
        name: {
            type: String as PropType<string>,
            required: true
        }
    },
    emits: ['on-search'],
    data() {
        return {
            localName: this.name,
            firstNames: ['ana', 'jim', 'ben']
        }
    },
    methods: {
        onSearch() {
            this.$emit('on-search', this.localName)
        }
    },
    watch: {
        name(newVal: string) {
            this.localName = newVal
        }
    }
}
</script>