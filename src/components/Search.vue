<template>
    <input type="text" v-model="localName">
    <button @click="onSearch" v-if="localName != ''">Rechercher</button>
    <!-- <div v-else-if="name ='ana'">Le nom est ana</div>
    <div v-else>Aucun bouton</div> -->
    <ul>
        <li v-for="(name, index) in firstNames" :key="name">
            {{ index }} - {{ name }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue';

const props = defineProps<{
    name: string
}>()

const emits = defineEmits<{
    'on-search': [string]
}>()

const localName = ref(props.name)
let firstNames = ref(['ana', 'jim', 'ben'])

function onSearch() {
    emits('on-search', localName.value)
}

watchEffect(() => {
    localName.value = props.name
})

// watch(() => age.value, (newVal) => {
//     console.log(newVal)
// })

</script>