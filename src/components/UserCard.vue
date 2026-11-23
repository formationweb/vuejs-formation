<template>
    <article>
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
    </article>
</template>

<script setup lang="ts">
import type { User } from '../core/interfaces/user';

defineProps<{
    user: User
}>()
</script>