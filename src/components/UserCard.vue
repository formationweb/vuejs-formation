<template>
    <article>
        <header>{{  user.name }}</header>
        <p>{{ user.email }}</p>
          <slot :isActive="active" v-bind="user"></slot>
        <input type="checkbox" v-model="active"> Activé
        <button @click="() => emits('onDelete', user.id)">Supprimer</button>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../interfaces/user';

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()

const active = ref(true)
</script>