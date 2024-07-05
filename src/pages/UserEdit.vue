<template>
    <h1>Modifier utilisateur</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const userId = route.params.id

console.log(userId)
</script>