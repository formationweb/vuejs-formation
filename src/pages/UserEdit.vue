<template>
    <h1>{{ userModifying?.name }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';
import { useUserManage } from '../composables/useUserManage';

const route = useRoute()
const userStore = useUserStore()
const userManage = useUserManage()
const { userModifying } = storeToRefs(userStore)

const paramsId = route.params.id
const id = paramsId ? +paramsId : undefined

if (id) userManage.getUser(id)
</script>