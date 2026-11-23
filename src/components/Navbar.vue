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
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    userName: string
}>()

const emits = defineEmits<{
    onSearch: [string]
}>()

const names = ref<string[]>(['ana', 'ben', 'jim'])
const localUserName = ref(props.userName)

function search() {
    emits('onSearch', localUserName.value)
}
</script>