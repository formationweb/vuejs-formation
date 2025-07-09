<template>
    <router-view />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { AppService } from './services/App';

const service = inject<AppService>('appService')

console.log(service?.getVersion())
</script>