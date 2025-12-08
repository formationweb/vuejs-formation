<template>
    <h1>Navbar</h1>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) of firstNames" :key="name">
          {{  index }} - {{ name }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

// defineProps({
//     name: {
//         type: String,
//         default: 'test'
//     }
// })

const props = defineProps<{
    name: string
}>()

//defineEmits(['onSearch'])

const emits = defineEmits<{
    onSearch: [string]
}>()

const firstNames = ref(['ana', 'ben', 'jim'])
const userName = ref(props.name)

function search() {
    emits('onSearch', userName.value)
}

watchEffect(() => {
    userName.value = props.name
})
</script>
