<template>
    <article>
        <slot name="title"></slot>
        <header>{{  user.name  }}</header>
        <slot name="subtitle"></slot>
        {{  user.email }}
        <div>
            <label>Activer</label>
            <input type="checkbox" 
                v-model="isActive"
                true-value="active"
                false-value="no-active"
            >
            {{  isActive }}
        </div>
        <footer>
            <button>Supprimer</button>
            <slot name="footer" :active="isActive" v-bind="user"></slot>
        </footer>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { User } from '../interfaces/User';

const props = defineProps< {
    user: User
}>()

const isActive = ref(props.user.isActive)
</script>