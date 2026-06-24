<template>
    <h1>{{ userModifying.name }}</h1>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/useUser';
import { useRoute } from 'vue-router';
const { get, userModifying } = useUser()

const { params } = useRoute()
const userId = params.id == undefined ? null : +params.id

get(userId!)
</script>