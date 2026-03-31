<template>
    <article>
        <header>{{  user.name }}</header>
        <p>{{ user.email }}</p>
          <slot :isActive="active" v-bind="user"></slot>
        <input type="checkbox" v-model="active"> Activé
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../interfaces/user';

defineProps<{
    user: User
}>()

const active = ref(true)
</script>