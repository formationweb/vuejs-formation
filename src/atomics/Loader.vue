<template>
    <div v-if="loading" aria-busy="true"></div>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    loading: boolean
}>()
</script>