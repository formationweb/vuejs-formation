<template>
    <canvas ref="myCanvas"></canvas>
    <button @click="drawSquare">Dessiner carré</button>
</template>

<script lang="ts" setup>
import { useTemplateRef } from 'vue';

const canvasRef = useTemplateRef('myCanvas')

function drawSquare() {
    const el = canvasRef.value
    if (el) {
        const context = el.getContext('2d')
        if (!context) return
        context.fillStyle = 'blue'
        context.fillRect(0, 0, 100, 100)
    }
}
</script>