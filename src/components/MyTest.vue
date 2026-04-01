<template>
    <h1>{{ title }}</h1>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import type { UserService } from '../services/users';

defineProps<{
    title: string
}>()

const userService = inject<UserService>('userService')

userService?.getUsers()
</script>