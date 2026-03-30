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

<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
    name: string
}>()

const emits = defineEmits<{
    onSearch: [string]
}>()

const propName = ref(props.name)
const names = ref(['ana', 'ben', 'jim'])

function search() {
    emits('onSearch', propName.value)
}

watch(props, (obj) => {
    propName.value = obj.name
})
</script>