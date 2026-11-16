<template>
    <h1>Navbar</h1>
    <input type="text" v-model="localUserName">
    <button @click="search" v-if="localUserName != ''">Rechercher</button>
    <div v-else>
        Vide
    </div>
    <ul>
        <li v-for="(name, index) in namesFiltered" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';

const props = defineProps<{
    userName: string
}>()

const emits = defineEmits<{
    runSearch: [string]
}>()

const localUserName = ref(props.userName)
const names = ref(['ana', 'ben', 'jim'])
const namesFiltered = computed(() => {
    return names.value.filter(name => localUserName.value.includes(name))
})

function search() {
    emits('runSearch', localUserName.value)
}

watchEffect(() => {
    localUserName.value = props.userName
})

watchEffect(() => {
    console.log(localUserName.value)
})
</script>

