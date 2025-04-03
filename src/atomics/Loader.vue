<template>
    <div v-if="loading" aria-busy="true"></div>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    loading: boolean
}>()
</script>