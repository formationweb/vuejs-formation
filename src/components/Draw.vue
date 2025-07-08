<template>
    <canvas ref="myCanvas"></canvas>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const canvasRef = useTemplateRef('myCanvas')

onMounted(() => {
    const el = canvasRef.value
    if (el) {
        const context = el.getContext('2d')
        if (!context) return
        context.fillStyle = 'blue'
        context.fillRect(0, 0, 100, 100)
    }
})
</script>