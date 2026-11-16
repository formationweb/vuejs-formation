<template>
    <article>
        <header>
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
        </header>
    </article>
</template>

<script lang="ts" setup>
import type { User } from '../core/interfaces/user';

defineProps<{
    user: User
}>()
</script>