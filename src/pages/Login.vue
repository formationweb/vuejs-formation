<template>
    <h1>Login</h1>

    <div v-show="!meta.valid && isSubmitting">
        Formulaire invalide
        <div v-show="errors.email">
            {{ errors.email }}
        </div>
    </div>

    <form @submit.prevent="login">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Mot de passe</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">

        <button>Se connecter</button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { ref, watchEffect } from 'vue';
import { object, string } from 'yup';

const isSubmitting = ref(false)

const { handleSubmit, defineField, meta, errors } = useForm({
    validationSchema: object({
        email: string().email('Email obligatoire').required()
            .test('domain', 'Domaine interdit', (email: string) => {
                return !email.endsWith('gmail.com')
            }),
        password: string().min(3).required()
    })
})

const login = handleSubmit((values) => {
    console.log(values)
}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
</script>