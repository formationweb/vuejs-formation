<template>
    <h1>Navbar</h1>
    <input type="text" v-model="localUserName">
    <button @click="search" v-if="localUserName != ''">Rechercher</button>
    <div v-else>
        Vide
    </div>
    <ul>
        <li v-for="(name, index) in namesFiltered" 
        :key="name" :class="{ red: index % 2 != 0, green: name.startsWith('ana') }" class="bold">
            {{ index }} - {{ name }}
        </li>
    </ul>
    <p :style="{ color: 'red', fontWeight: 'bold' }">test</p>
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
const names = ref(['ana', 'ben', 'jim', 'benjamin', 'benfeoef'])
const namesFiltered = computed(() => {
    return names.value.filter(name => name.includes(localUserName.value))
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

<style scoped>
.red {
    color: red;
}

.green {
    color: green;
}

.bold {
    font-weight: bold;
}
</style>