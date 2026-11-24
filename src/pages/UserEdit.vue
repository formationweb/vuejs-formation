<template>
    <h1>{{ userModifying.name }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserManage } from '../composables/useUserManage';
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';

const { params } = useRoute()
const userManage = useUserManage()
const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)
const userId = params.id !== undefined ? +params.id : null

if (userId) userManage.getUser(userId)
</script>