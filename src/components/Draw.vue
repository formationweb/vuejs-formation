<template>
    <canvas ref="myCanvas"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue';

const canvasRef = useTemplateRef('myCanvas')

onMounted(() => {
    const el = canvasRef.value
    // const context = el?.getContext('2d')
    // if (context) {
    //     context.fillStyle = 'blue'
    //     context.fillRect(0, 0, 100, 100)
    // }
})
</script>
