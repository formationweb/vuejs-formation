<template>
    <article>
        <slot name="header"></slot>
        <header>{{ user.name }}</header>
        <footer>{{ user.email }}</footer>
        <slot></slot>
        <input type="checkbox" v-model="active">
        <slot name="footer" :isActive="active"></slot>
        <button @click="emits('onDelete', user.id)">Supprimer</button>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../core/interfaces/user';

const active = ref(false)

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()
</script>