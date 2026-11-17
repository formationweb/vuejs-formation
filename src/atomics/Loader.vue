<template>
    <div v-if="loading" aria-busy="true"></div>
    <slot v-else></slot>
</template>

<script lang="ts" setup>
defineProps<{
    loading: boolean
}>()
</script>