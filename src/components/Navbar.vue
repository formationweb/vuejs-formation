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
    <!-- <RouterLink to="/login" custom v-slot="router">
        <button @click="router.navigate">Se connecter</button>
    </RouterLink> -->
    <button @click="router.push({name : 'loginId'})">Se connecter</button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useSearch } from '../composables/useSearch';

const router = useRouter()

const props = defineProps<{
    userName: string
}>()

const emits = defineEmits<{
    runSearch: [string]
}>()

const { localUserName, namesFiltered, search } = useSearch(props, emits)
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