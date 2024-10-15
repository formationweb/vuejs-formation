<template>
    <input type="text" v-model="userName">
    <button @click="onSearch" v-if="userName != ''">Rechercher</button>
    <!-- <div v-else-if="userName == 'ana'">Test</div>
    <div v-else>Plus de bouton</div> -->
    <ul>
        <li v-for="(name, index) in firstNames" :key="name">
            {{ index }} - {{  name  }}
        </li>
        <!-- <li v-for="(val, key) in myObj" :key="key">
            {{ key }} - {{  val  }}
        </li> -->
    </ul>
</template>

<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue';
import { useSearch } from '../composables/useSearch';

const props = defineProps<{
    name: string
}>()

const emits = defineEmits<{
    'on-search': [string]
}>()

const { userName, onSearch, firstNames } = useSearch(props, emits)
</script>