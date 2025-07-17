<template>
    <h1>Edit</h1>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const { params } = useRoute()
const userId = +params.id

console.log(userId)
</script>