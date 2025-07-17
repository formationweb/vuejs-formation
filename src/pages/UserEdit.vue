<template>
    <h1>{{ userModifying?.name }}</h1>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const { params } = useRoute()
const userId = +params.id

const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)

userStore.getUser(userId)
</script>