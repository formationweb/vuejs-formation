<template>
    <input type="text" v-model="localName">
    <button @click="search" v-if="localName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstNames" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
    name: string
}>()
const emits = defineEmits(['on-search'])

const localName = ref<string>(props.name)
const firstNames = ref(['ana', 'jim', 'ben'])

function search() {
    emits('on-search', localName.value)
}

watch(() => props.name, (newVal) => {
    localName.value = newVal
})
</script>