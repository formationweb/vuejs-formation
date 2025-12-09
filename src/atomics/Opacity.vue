<template>
    <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model="alpha"
    />
    <div :style="{ backgroundColor: color, opacity: alpha }"></div>
    <p>{{ percentStr }}</p>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';

const props = defineProps<{
    color: string
    opacity: number
}>()

const emits = defineEmits<{
    change: [number]
}>()

const alpha = ref(props.opacity)
const percentStr = computed(() =>  alpha.value * 100 + '%')

watchEffect(() => {
    emits('change', alpha.value)
})

setTimeout(() => {
    alpha.value = 0.2
}, 2000)
</script>

<style scoped>
div {
    width: 100px;
    height: 100px;
    background-color: black;
    opacity: 1;
}
</style>