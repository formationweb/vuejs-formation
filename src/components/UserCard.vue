<template>
    <article>
        <slot name="header"></slot>
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <slot></slot>
        <input type="checkbox" v-model="isActive" />
        <slot name="footer" :active="isActive" v-bind="user"></slot>
        <button @click="emits('onDelete', user.id)">Supprimer</button>
        <button @click="router.push({ name: 'userEdit', params: { id: user.id } })">Modifier</button>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../core/interfaces/user';
import { useRouter } from 'vue-router';

defineProps<{
    user: User
}>()

const router = useRouter()

const emits = defineEmits<{
    onDelete: [number]
}>()

const isActive = ref(false)
</script>