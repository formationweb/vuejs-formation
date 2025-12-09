<template>
    <canvas ref="myCanvas"></canvas>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue';

const canvasRef = useTemplateRef('myCanvas')

onMounted(() => {
    const el = canvasRef.value as HTMLCanvasElement
    if (el) {
       const context = el.getContext('2d')
       if (context) {
         context.fillStyle = 'blue'
         context.fillRect(0, 0, 100, 100)
       }
    }
})
</script>