<template>
    <h1>User Edit</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const paramsId = route.params.id
const id = paramsId ? +paramsId : undefined

console.log(id)
</script>