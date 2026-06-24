<template>
    <h1>Login</h1>

    <form @submit.prevent="login">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <div v-show="errors.email">
            {{ errors.email }}
        </div>

        <label>Password</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">

        <button>Se connecter</button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

const { defineField, handleSubmit, errors, setFieldValue } = useForm({
    validationSchema: object({
        email: string().email('Email obligatoire').required()
            .test('email_domain', 'Nom de domaine interdit', (email: string) => {
                return !email.endsWith('gmail.com')
            }),
        password: string().required().min(6)
    })
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const login = handleSubmit((values) => {
    console.log(values)
})

setTimeout(() => {
    setFieldValue('email', 'zeazregrtgh@adzfegr.net')
}, 2000)
</script>