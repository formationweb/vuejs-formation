<template>
    <h1>User Edit</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const { params } = useRoute()
const userId = params.id !== undefined ? +params.id : null

console.log(userId)
</script>