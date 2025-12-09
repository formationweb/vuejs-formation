<template>
    <h1>Navbar</h1>
    <input type="text" v-model="userName">
    <button @click="search" v-if="userName != ''">Rechercher</button>
    <ul>
        <li v-for="(name, index) of firstNamesFiltered" :key="name">
          {{  index }} - {{ name }}
        </li>
    </ul>
    <!-- <RouterLink :to="{ name: 'loginId' }" custom v-slot="router">
        <button @click="router.navigate">Se connecter</button>
    </RouterLink> -->
    <button @click="router.push({ name: 'loginId' })">Se connecter</button>
</template>

<script setup lang="ts">
import { useSearch } from '@/composables/useSearch';
import { computed, ref, watch, watchEffect } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

// defineProps({
//     name: {
//         type: String,
//         default: 'test'
//     }
// })

const props = defineProps<{
    name?: string
}>()

//defineEmits(['onSearch'])

const emits = defineEmits<{
    onSearch: [string]
}>()

const { firstNamesFiltered, userName, search } = useSearch(props, emits)
</script>
