<template>
    <article>
        <slot name="header"></slot>
        <header>{{ user.name }}</header>
        <slot></slot>
        <p>{{ user.email }}</p>
        <div><input type="checkbox" v-model="active"> actif ?</div>
        <slot name="footer" :isActive="active" v-bind="user"></slot>
        <button @click="emits('onDelete', user.id)">Supprimer</button>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../core/interfaces/user';

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()

const active = ref(false)
</script>