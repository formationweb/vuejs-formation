<template>
    <article>
        <slot name="head"></slot>
        <h2>{{ user.name }}</h2>
        <slot></slot>
        <span>{{ user.email }}</span>
        <slot name="foot" :isActive="active" v-bind="user"></slot>
        <input type="checkbox" v-model="active"> 
    </article>
</template>

<script setup lang="ts">
import type { User } from '@/core/interfaces/user';
import { ref } from 'vue';

defineProps<{
    user: User
}>()

const active = ref(false)
</script>