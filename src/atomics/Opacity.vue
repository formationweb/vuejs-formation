<template>
    <input type="range" min="0" max="1" step="0.01" v-model="alpha" @input="emits('change', alpha)">
    <div :style="{ backgroundColor: color, opacity: alpha }"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    opacity: number
    color: string
}>()

const emits = defineEmits<{
    change: [number]
}>()

const alpha = ref(props.opacity)
</script>

<style scoped>
div {    
    width: 100px;    
    height: 100px;
}
</style>