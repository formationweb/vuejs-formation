<template>
    <router-view />
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import type { AppService } from './services/App';

const app = inject<AppService>('appService')

console.log(app?.getVersion())
</script>