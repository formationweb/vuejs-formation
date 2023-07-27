<template>
    <article>
        <slot name="header">
            <h1>Défaut</h1>
        </slot>
        <header>{{ user.name }}</header>
        {{ user.email }}
        <slot></slot>
        <footer>
            <button @click="emits('remove', user.id)">Supprimer</button>
            <input type="checkbox" v-model="isActive">
            <slot name="footer" :actived="isActive" v-bind="user"></slot>
        </footer>
    </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue'
import type { User } from '@/interfaces/User';

const props = defineProps({
    user: {
        type: Object as PropType<User>,
        required: true
    }
})

const emits = defineEmits(['remove'])

const isActive = ref(props.user.isActive)

</script>