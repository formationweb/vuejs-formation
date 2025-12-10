<template>
    <h1>login</h1>

    <div v-if="error" class="red">
        {{ error }}
    </div>

    <form @submit.prevent="submitLogin">
        <label>Email</label>
        <input type="text" v-model="fields.email">

        <label>Mot de passe</label>
        <input type="password" v-model="fields.password">

        <button>Se connecter</button>
    </form>
</template>

<script lang="ts" setup>
import { useAuth } from '@/composables/useAuth';
import { useRouter } from 'vue-router';

const { fields, login, error } = useAuth()
const router = useRouter()

async function submitLogin() {
    await login()
    router.push({ name: 'home' })
}
</script>
