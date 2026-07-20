<template>
    <input type="text" v-model="name">
    <button @click="search" v-if="name != ''">Rechercher</button>
    <div v-else>Rien</div>
    
    
    <div :style="{ color: 'red', fontWeight: 'bold' }">Un texte</div>
    
    <ul>
        <li v-for="(nom, index) in names" :key="nom" 
        :class="{ red: index % 2 == 0, bold: index == 1 }">
            {{ index }} - {{ nom }}
        </li>
        <!-- <li v-for="(val, key) in config" :key="key">
            {{ key }} - {{ val }}
        </li> -->
    </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// const props = defineProps({
//     userName: {
//         type: String,
//         required: true
//     }
// })

const props = defineProps<{
    userName: string
}>()

const emits = defineEmits<{
    onSearch: [string]
}>()

let name = ref(props.userName)
const names = ref(['ana', 'ben', 'jim'])

function search() {
    emits('onSearch', name.value)
}
</script>

<style scoped>
.red {
    color: red;
}

.bold {
    font-weight: bold;
}
</style>