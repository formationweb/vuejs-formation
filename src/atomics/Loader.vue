<template>
    <div v-if="loading" aria-busy="true"></div>
    <slot v-else></slot>
</template>

<script setup lang="ts">
defineProps<{
    loading: boolean
}>()
</script>