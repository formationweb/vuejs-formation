<template>
    <h1>Navbar</h1>
    <input type="text" v-model="propName">
    <button @click="search" v-if="propName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) in namesFiltered" :key="name">
           <p :class="{ red: index % 2 != 0, bold: true }">{{ index }} - {{ name }}</p>
        </li>
    </ul>
    <RouterLink :to="{ name: 'loginId' }" custom v-slot="router">
        <button @click="router.navigate">Se connecter</button>
    </RouterLink>
    <!-- <button @click="router.push({
        name: 'loginId'
    })">Se connecter</button> -->
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useSearch } from '../composables/useSearch';

const router = useRouter()

const props = defineProps<{
    name: string
}>()

const emits = defineEmits<{
    onSearch: [string]
}>()

const { propName, search, namesFiltered } = useSearch(props, emits)
</script>

<style scoped>
.red {
    color: red;
}

.bold {
    font-weight: bold;
}
</style>