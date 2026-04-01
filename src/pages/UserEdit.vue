<template>
    <h1>{{ userModifying.name }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUser } from '../composables/useUser';
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';

const user = useUser()
const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)

const { params } = useRoute()
const userId = params.id === undefined ? null : +params.id

if (userId) user.getUser(userId)
</script>