<template>
    <canvas :ref="(el) => elCanvas.push(el)"></canvas>
    <canvas :ref="(el) => elCanvas.push(el)"></canvas>
    <button @click="drawRectangle">Dessiner Rectangle</button>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const elCanvas = reactive<any[]>([])

function drawRectangle() {
    for (let el of elCanvas) {
        const context = el.getContext('2d')
        if (!context) return
        context.fillStyle = 'blue'
        context.fillRect(0, 0, 100, 100)
    }
}
</script>