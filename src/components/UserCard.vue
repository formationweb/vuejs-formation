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
            <button v-confirm="removeUser" >Supprimer</button>
            <router-link :to="{ name: 'user-edit', params: { id: user.id } }">Modifier</router-link>
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

const emits = defineEmits<{
    'on-delete': [number]
}>()

const isActive = ref(props.user.isActive)

function removeUser() {
    emits('on-delete', props.user.id)
}
</script>