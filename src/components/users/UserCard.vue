<template>
    <article>
        <header>{{ user.name }}</header>
        {{ user.email }}
        <footer></footer>
    </article>
</template>

<script setup lang="ts">
import type { User } from '../../interfaces/User';

defineProps<{
    user: User
}>()
</script>