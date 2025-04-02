<template>
    <article>
        <header>{{ user.name }}</header>
        <p>{{ user.email }}</p>
    </article>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { User } from '../interfaces/User';

export default {
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
}
</script>