<template>
    <input type="range" min="0" max="1" step="0.01" v-model="alpha">
    <p>{{ strAlpha  }} </p>
    <div class="preview" :style="{ backgroundColor: color, opacity: alpha }"></div>
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
const strAlpha = computed(() => alpha.value * 100 + '%')

watchEffect(() => {
  alpha.value = props.opacity
})

watchEffect(() => {
  console.log(strAlpha.value)
})

watchEffect(() => {
  emits('change', alpha.value)
})
</script>

<style>
  .preview {
    width: 100px;
    height: 100px;
  }
</style>