<template>
    <article>
        <header>{{  user.name }}</header>
        {{ user.email }}
        <footer></footer>
    </article>
</template>

<script lang="ts">
import type { User } from '@/interfaces/User';

export default {
    props: {
        user: {
            type: Object as () => User,
            required: true
        }
    }
}
</script>