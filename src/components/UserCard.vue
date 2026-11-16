<template>
    <article>
        <header>
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
        </header>
    </article>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { User } from '../core/interfaces/user';

export default {
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
}
</script>