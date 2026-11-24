<template>
    <canvas ref="canvasEl"></canvas>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue';

const canvasRef = useTemplateRef('canvasEl')

onMounted(() => {
    const el = canvasRef.value
    if (el) {
        const context = el.getContext('2d')
        if (context) {
            context.fillStyle = 'blue'
            context.fillRect(0, 0, 100, 100)
        }
    }
})

</script>