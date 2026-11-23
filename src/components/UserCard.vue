<template>
    <article>
        <slot name="header"></slot>
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <slot></slot>
        <input type="checkbox" v-model="isActive" />
        <slot name="footer" :active="isActive" v-bind="user"></slot>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../core/interfaces/user';

defineProps<{
    user: User
}>()

const isActive = ref(false)
</script>