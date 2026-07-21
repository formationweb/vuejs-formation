<template>
    <input type="text" v-model="name">
    <button @click="search" v-if="name != ''">Rechercher</button>
    <div v-else>Rien</div>
    
    
    <div :style="{ color: 'red', fontWeight: 'bold' }">Un texte</div>
    
    <ul>
        <li v-for="(nom, index) in namesFiltered" :key="nom" 
        :class="{ red: index % 2 == 0, bold: index == 1 }">
            {{ index }} - {{ nom }}
        </li>
        <!-- <li v-for="(val, key) in config" :key="key">
            {{ key }} - {{ val }}
        </li> -->
    </ul>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

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

const name = ref(props.userName)
const names = ref(['ana', 'ben', 'jim'])
const namesFiltered = computed(() => {
    return names.value.filter(n => n.startsWith(name.value))
})

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