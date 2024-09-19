<template>
    <div v-if="!loading">
        <slot></slot>
    </div>
    <div v-else>
        <div aria-busy="true">Chargement...</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    loading: boolean
}>()
</script>