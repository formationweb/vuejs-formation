<template>
    <article>
        <slot></slot>
        <header>{{  user.name  }}</header>
        {{  user.email }}
    </article>
</template>

<script setup lang="ts">
import { User } from '../interfaces/User';

defineProps< {
    user: User
}>()
</script>