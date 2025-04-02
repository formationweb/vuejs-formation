<template>
    <input type="text" v-model="firstName" />
    <button @click="search" v-if="firstName != ''">Rechercher</button>
    <p v-else>Rentrez un texte !</p>
    <ul>
        <li v-for="(name, index) in names" :key="index">
            {{ name }}
        </li>
        <!-- <li v-for="(val, key) in myObj" :key="key">
           {{  key }} - {{ val }}
        </li> -->
    </ul>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'

const props = defineProps<{
    userName: string
}>()

const emits = defineEmits<{
    'onSearch': [string]
}>()

let firstName = ref(props.userName)
const names = ['ana', 'jim', 'ben']

function search() {
    emits('onSearch', firstName.value)
}

watch(props, (obj) => {
    firstName.value = obj.userName
})
</script>