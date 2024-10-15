<template>
    <article>
        <slot name="title"></slot>
        <header>{{ user.name }}</header>
        {{ user.email }}
        <slot></slot>
        <div>
            <label>Activer</label>
            <input type="checkbox" v-model="isActive">
        </div>
        <footer>
            <slot name="footer" :active="isActive" v-bind="user"></slot>
            <button @click="emits('on-delete', user.id)">Supprimer</button>
        </footer>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../interfaces/User';

const isActive = ref(false)

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    'on-delete': [number]
}>()
</script>