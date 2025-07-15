<template>
    <article>
        <slot name="header"></slot>
        <header>{{ user.name }}</header>
        <footer>{{ user.email }}</footer>
        <slot></slot>
        <slot name="footer"></slot>
    </article>
</template>

<script lang="ts" setup>
import type { User } from '../core/interfaces/user';

defineProps<{
    user: User
}>()
</script>