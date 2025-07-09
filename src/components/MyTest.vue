<template>
    <h1>{{ title }}</h1>
</template>

<script lang="ts" setup>
defineProps<{
    title: string
}>()
</script>