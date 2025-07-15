<template>
    <article>
        <header>{{ user.name }}</header>
        <footer>{{ user.email }}</footer>
    </article>
</template>

<script lang="ts">
import type { User } from '../core/interfaces/user';
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