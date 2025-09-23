<template>
    <input type="range" min="0" max="1" step="0.01"  v-model="localOpacity">
    {{ percentStr }}
    <div :style="{ backgroundColor: color, opacity: localOpacity }"></div>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';

const props = defineProps<{
    color: string
    opacity: number
}>()

const emit = defineEmits<{
    change: [number]
}>()

const localOpacity = ref(props.opacity)
const percentStr = computed(() => Math.round(localOpacity.value * 100) + '%')

watchEffect(() => {
    localOpacity.value = props.opacity
})

watchEffect(() => {
    console.log( percentStr.value)
    emit('change', localOpacity.value)
})

setTimeout(() => {
    localOpacity.value = 0.5
}, 2000)
</script>

<style scoped>
    div {
        width: 100px;
        height: 100px;
    }
</style>