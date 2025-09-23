<template>
    <article>
        <slot name="title"></slot>
        <header>{{ user.name }}</header>
        <slot></slot>
        <p>{{ user.email }}</p>
        <slot name="footer" 
            :active="isActive" 
            v-bind="user">
        </slot>
        <div>
            <label>Activer</label>
            <input type="checkbox" v-model="isActive">
        </div>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../interfaces/User';

const isActive = ref(false)

defineProps<{
    user: User
}>()
</script>