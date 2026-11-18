<template>
    <article>
        <header>
            <slot name="header"></slot>
            <h2>{{ user.name }}</h2>
            <slot></slot>
            <p>{{ user.email }}</p>
            <input type="checkbox" v-model="isActive" />
            <slot name="footer" :active="isActive" v-bind="user"></slot>
            <button @click="emits('onDelete', user.id)">Supprimer</button>
            <button 
            @click="router.push({ 
                name: 'userEdit', 
                params:  { id: user.id }
            })">Modifier</button>
        </header>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../core/interfaces/user';
import { useRouter } from 'vue-router';

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()

const router = useRouter()

const isActive = ref(false)
</script>