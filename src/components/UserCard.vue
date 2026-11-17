<template>
    <article>
        <header>
            <slot name="header"></slot>
            <h2>{{ user.name }}</h2>
            <slot></slot>
            <p>{{ user.email }}</p>
            <input type="checkbox" v-model="isActive" />
            <slot name="footer" :active="isActive" v-bind="user"></slot>
        </header>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../core/interfaces/user';

defineProps<{
    user: User
}>()

const isActive = ref(false)
</script>