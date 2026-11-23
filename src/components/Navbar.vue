<template>
    <h1>Navbar</h1>

    <input type="text" v-model="localUserName">
    <button @click="search" v-if="localUserName != ''">Rechercher</button>
    <div v-else>
        Vide
    </div>
    <ul>
        <li v-for="(name, index) in namesFiltered" :key="name" 
        :class="{ red: index % 2 == 0 }" class="bold">
           {{ index }} - {{ name }}
        </li>
    </ul>
    <div :style="{ color: 'red', fontWeight: 'bold' }">
        un texte
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
    userName: string
}>()

const emits = defineEmits<{
    onSearch: [string]
}>()

const names = ref<string[]>(['ana', 'ben', 'jim'])
const localUserName = ref(props.userName)
const namesFiltered = computed(() => {
    return names.value.filter(name => name.includes(localUserName.value))
})

function search() {
    emits('onSearch', localUserName.value)
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