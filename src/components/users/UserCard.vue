<template>
    <article>
        <header>{{ user.name }}</header>
        {{ user.email }}
        <footer></footer>
    </article>
</template>

<script lang="ts">
import { PropType } from 'vue';
import type { User } from '../../interfaces/User';

export default {
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
}
</script>