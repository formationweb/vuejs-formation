<template>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in names" :key="index">
            {{ name }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue';

const props = defineProps<{
    name: string
}>()

const emits = defineEmits<{
    onSearch: [string] 
}>()

const userName = ref(props.name)
const names = ['ana', 'jim', 'ben']

function search() {
    emits('onSearch', userName.value)
}

watchEffect(() => {
    userName.value = props.name // ben
})
</script>