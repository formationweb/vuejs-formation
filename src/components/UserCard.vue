<template>
    <article>
        <slot name="header"></slot>
        <header>{{ user.name }}</header>
        <footer>{{ user.email }}</footer>
        <slot></slot>
        <input type="checkbox" v-model="active">
        <slot name="footer" :isActive="active" v-bind="user"></slot>
        <button v-confirm="{
            message: 'etes vous sur',
            cb: () => emits('onDelete', user.id)
        }">Supprimer</button>
        <router-link :to="{ name: 'userEdit', params: { id: user.id } }">Modifier</router-link>
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