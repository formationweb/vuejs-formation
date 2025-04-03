<template>
    <input type="range" min="0" max="1" step="0.01" v-model="alpha" @input="emits('change', alpha)">
    <div class="preview" :style="{ backgroundColor: color, opacity: alpha }"></div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
    color: string
    opacity: number
}>()

const emits = defineEmits<{
    'change': [number]
}>()

const alpha = ref(props.opacity)

watchEffect(() => {
    alpha.value = props.opacity
})
</script>

<style>
.preview {
    width: 100px;
    height: 100px;
}
</style>