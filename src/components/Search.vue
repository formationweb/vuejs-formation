<template>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstNames" :key="index">
          {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            userName: 'ana',
            firstNames: ['ana', 'ben', 'jim']
        }
    },
    methods: {
        search() {
            console.log(this.userName)
        }
    }
}
</script>