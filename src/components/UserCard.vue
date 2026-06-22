<template>
    <article>
        <h2>{{ user.name }}</h2>
        <span>{{ user.email }}</span>
    </article>
</template>

<script lang="ts">
import type { User } from '@/core/interfaces/user';
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