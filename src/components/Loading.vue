<template>
    <div v-if="loading">
        <div aria-busy="true">Chargement</div>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps({
    loading: Boolean
})
</script>