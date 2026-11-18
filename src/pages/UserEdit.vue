<template>
    <h1>{{ userModifying.name }}</h1>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '../stores/user';
import { useUserManage } from '../composables/useUserManage';
import { storeToRefs } from 'pinia';

const { params } = useRoute()
const userStore = useUserStore()
const userManage = useUserManage()

const userId = params.id === undefined ? null : +params.id
const { userModifying } = storeToRefs(userStore)

if (userId) userManage.getUser(userId)
</script>