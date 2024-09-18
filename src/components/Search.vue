<template>
    <input type="text" v-model="name">
    <button @click="onSearch" v-if="name != ''">Rechercher</button>
    <!-- <div v-else-if="name ='ana'">Le nom est ana</div>
    <div v-else>Aucun bouton</div> -->
    <ul>
        <li v-for="(name, index) in firstNames" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    data() {
        return {
            name: 'ana',
            firstNames: ['ana', 'jim', 'ben']
        }
    },
    methods: {
        onSearch() {
            console.log(this.name)
        }
    }
}
</script>