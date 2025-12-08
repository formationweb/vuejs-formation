<template>
    <div aria-busy="true" v-if="loading"></div>
    <slot v-else></slot>
</template>

<script setup lang="ts">
    defineProps<{
        loading: boolean
    }>()
</script>