<template>
    <article>
        <slot name="head"></slot>
        <h2>{{ user.name }}</h2>
        <slot></slot>
        <span>{{ user.email }}</span>
        <slot name="foot" :isActive="active" v-bind="user"></slot>
        <input type="checkbox" v-model="active"> 
        <button @click="emits('onDelete', user.id)">Supprimer</button>
        <button @click="router.push({ name: 'userEdit', params: { id: user.id } })">Modifier</button>
    </article>
</template>

<script setup lang="ts">
import type { User } from '@/core/interfaces/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()

const active = ref(false)
</script>