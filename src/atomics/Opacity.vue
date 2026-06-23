<template>
    <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model="localOpacity"
        @input="emits('change', localOpacity)"
    />
    <div :style="{ backgroundColor: color, opacity: localOpacity }"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    color: string
    opacity: number
}>()

const emits = defineEmits<{
    change: [number]
}>()

const localOpacity = ref(props.opacity)
</script>

<style scoped>
div {
    width: 100px;
    height: 100px;
    background-color: black;
    opacity: 1;
}
</style>