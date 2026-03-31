<template>
    <input type="range" min="0" max="1" step="0.01" v-model="alpha" />
    <div :style="{ backgroundColor: color, opacity: alpha }"></div>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue';

const props = defineProps<{
    color: string
    opacity: number
}>()

const emits = defineEmits<{
    change: [number]
}>()

const alpha = ref(props.opacity)

setTimeout(() => {
    alpha.value = 0.2
}, 2000)

// watchEffect(() => {
//     emits('change', alpha.value)
// })

watch(alpha, () => {
     emits('change', alpha.value)
})
</script>

<style scoped>
div {    
    width: 100px;    
    height: 100px;
}
</style>