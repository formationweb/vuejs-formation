<template>
    <article>
        <header>{{ user.name }}</header>
        <slot name="title"></slot>
        <p>{{ user.email }}</p>
        <slot></slot>
        <div>
            <label>Activer</label>
            <input type="checkbox" v-model="isActive" />
        </div>
        <footer>
            <slot name="footer" :active="isActive" v-bind="user"></slot>
            <button v-confirm="{
                message: 'êtes vous de ..',
                cb: () => emits('onDelete', user.id)
            }">Supprimer</button>
            <router-link :to="{ name: 'userEdit', params: { id: user.id } }">Modifier</router-link>
        </footer>
    </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { User } from '../interfaces/User';

const isActive = ref(false)

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()
</script>