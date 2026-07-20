<template>
    <canvas ref="canvasRef"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue';

const canvasEl = useTemplateRef('canvasRef')

onMounted(() => {
    const el = canvasEl.value
    if (el) {
        const context = el.getContext('2d')
        if (context) {
            context.fillStyle = 'red'
            context.fillRect(0, 0, 100, 100)
        }
    }
})
</script>