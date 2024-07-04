<template>
    <article>
        <slot name="header"></slot>
        <header>{{ user.name }}</header>
        {{ user.email }}
        <footer>
            Est actif: <input type="checkbox" v-model="isActive">
        </footer>
        <slot></slot>
        <slot name="footer" :active="isActive"></slot>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../../interfaces/User';

const props = defineProps<{
    user: User
}>()

const isActive = ref(props.user.isActive)
</script>