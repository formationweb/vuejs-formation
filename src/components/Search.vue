<template>
    <input type="text" v-model="name">
    <button @click="search" v-if="name != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in firstNamesFiltered" :key="index">
          {{ name }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watchEffect } from 'vue';

const { userName } = defineProps<{
    userName: string
}>()

const emit = defineEmits<{
    onSearch: [string]
}>()

const firstNames = ref(['ana', 'ben', 'jim'])
const name = ref(userName)
const firstNamesFiltered = computed(() => {
    return firstNames
    .value.filter(firstName => firstName.startsWith(name.value))
})

function search() {
    emit('onSearch', name.value)       
}

watchEffect(() => {
    name.value = userName
})
</script>