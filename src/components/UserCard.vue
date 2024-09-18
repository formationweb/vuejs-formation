<template>
    <article>
        <header>{{ user.name }}</header>
        {{ user.email }}
    </article>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { User } from '../interfaces/User';

export default {
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    }
}
</script>