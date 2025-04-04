<template>
    <h1>{{ userModifying?.name }}</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';

const { params } = useRoute()
const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)
const userId = +params.id

onMounted(async () => {
    await userStore.getUser(userId)
})
</script>