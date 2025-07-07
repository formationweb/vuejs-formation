<template>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name,index) in names" :key="index">
            {{ index }} - {{ name }}
        </li>
    </ul>
    {{ firstName  }}
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue'

const { firstName } = defineProps<{
    firstName: string
}>()

const emits = defineEmits<{
    'onSearch': [string]
}>()

const userName = ref(firstName)
const names = ref(['ana', 'jim', 'ben'])

function search() {
    emits('onSearch', userName.value)
}

watchEffect(() => {
    userName.value = firstName
})

// watch(props, (obj) => {
//     userName.value = obj.firstName
// })
</script>