<template>
    <article>
        <header>{{ user.name }}</header>
        <p>{{ user.email }}</p>
    </article>
</template>

<script lang="ts">
import type { User } from '@/core/interfaces/User';
import type { PropType } from 'vue';

export default {
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
}
</script>