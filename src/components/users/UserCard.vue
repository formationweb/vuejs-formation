<template>
    <article>
        <slot name="header"></slot>
        <header>{{ user.name }}</header>
        {{ user.email }}
        <footer>
            Est actif: <input type="checkbox" v-model="isActive">
            <router-link :to="{ name: 'user-edit', params: { id: user.id } }">Modifier</router-link>
            <button @click="emits('remove', user.id)">Supprimer</button>
        </footer>
        <slot></slot>
        <slot name="footer" :active="isActive" v-bind="user"></slot>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../../interfaces/User';

const props = defineProps<{
    user: User
}>()
const emits = defineEmits(['remove'])

const isActive = ref(props.user.isActive)
</script>