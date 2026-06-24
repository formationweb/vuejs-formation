<template>
    <canvas ref="myCanvas"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, useTemplateRef } from 'vue';

const canvasRef = useTemplateRef('myCanvas')

onMounted(() => {
   console.log(canvasRef.value) 
})
</script>