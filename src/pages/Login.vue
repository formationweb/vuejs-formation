<template>
    <h1>Login</h1>

    <form @submit.prevent="login">
        <label>Email</label>
        <input type="text" v-model="form.email">

        <label>Mot de passe</label>
        <input type="password" v-model="form.password">

        <button>Se connecter</button>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
    email: '',
    password: ''
})

function login() {
    console.log({ ...form })
}
</script>