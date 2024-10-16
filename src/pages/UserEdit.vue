<template>
    <div>
        <h1>User Edit</h1>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const userId = +route.params.id

console.log(userId)
</script>
