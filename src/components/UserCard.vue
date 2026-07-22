<template>
    <article>
        <slot name="header"></slot>
        <header>{{ user.name }}</header>
        <slot></slot>
        <p>{{ user.email }}</p>
        <div><input type="checkbox" v-model="active"> actif ?</div>
        <slot name="footer" :isActive="active" v-bind="user"></slot>
        <button @click="emits('onDelete', user.id)">Supprimer</button>
        <button @click="router.push({ name: 'userEdit', params: { id: user.id } })">Modifier</button>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../core/interfaces/user';
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