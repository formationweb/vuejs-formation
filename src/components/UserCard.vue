<template>
    <article>
        <header>{{ user.name }}</header>
        <p>{{ user.email }}</p>
    </article>
</template>

<script lang="ts" setup>
import type { User } from '../interfaces/User';

defineProps<{
    user: User
}>()
</script>