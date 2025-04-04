<template>
    <router-view />
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { AppService } from './services/App';

const service = inject<AppService>('appService')

console.log(service?.getVersion())
</script>