<template>
    <article>
        <header>{{  user.name }}</header>
        <p>{{ user.email }}</p>
          <slot :isActive="active" v-bind="user"></slot>
        <input type="checkbox" v-model="active"> Activé
        <button
            v-confirm="{
                message: 'Etes vous sûr de ...',
                user,
                onConfirm: () => emits('onDelete', user.id)
            }"
        >Supprimer</button>
        <RouterLink :to="{ name: 'userEdit', params: { id: user.id } }">
            <button>Modifier</button>
        </RouterLink>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '@/interfaces/user';

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()

const active = ref(true)
</script>