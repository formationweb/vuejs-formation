<template>
    <canvas ref="myCanvas"></canvas>
</template>

<script lang="ts" setup>
import { useTemplateRef } from 'vue';

const canvasRef = useTemplateRef('myCanvas')

console.log(canvasRef.value)
</script>
