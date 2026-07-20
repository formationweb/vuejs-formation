<template>
    <article>
        <header>{{ user.name }}</header>
        <p>{{ user.email }}</p>
    </article>
</template>

<script lang="ts" setup>
import type { User } from '../core/interfaces/user';

defineProps<{
    user: User
}>()
</script>