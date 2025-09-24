<template>
    <h1>{{ title }}</h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{
    title: string
}>()
</script>