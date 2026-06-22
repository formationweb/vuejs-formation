<template>
    <article>
        <slot name="head"></slot>
        <h2>{{ user.name }}</h2>
        <slot></slot>
        <span>{{ user.email }}</span>
        <slot name="foot"></slot>
    </article>
</template>

<script setup lang="ts">
import type { User } from '@/core/interfaces/user';

defineProps<{
    user: User
}>()
</script>