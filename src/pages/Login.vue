<template>
    <h1>Login</h1>

    <div v-show="!meta.valid && submitting">
        Formulaire invalide
        <!-- <div v-show="errors.email">
            {{ errors.email }}
        </div> -->
        <div v-for="(errorMsg, key) in errors" :key="key">
            {{ errorMsg }}
        </div>
    </div>

    <form @submit.prevent="login">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Password</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">

        <button>Connexion</button>
    </form>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { object, string } from 'yup';
import { useAuthStore, type LoginPayload } from '../stores/auth';
import { useRouter } from 'vue-router';

function domainValidator(domainName: string) {
    return (email: string) => {
        return !email.endsWith(domainName)
    }
}

const { handleSubmit, defineField, meta, errors } = useForm({
    validationSchema: object({
        email: string()
            .required('Email obligatoire')
            .email()
            .test('email_domain', 'Nom de domaine interdit', 
            domainValidator('hotmail.com')),
        password: string().required().min(6)
    })
})

const authStore = useAuthStore()
const router = useRouter()

const submitting = ref(false)

const login = handleSubmit(async (values) => {
    submitting.value = true
    await authStore.login(values as LoginPayload)
    router.push({ name: 'home' })

}, () => {
    submitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
</script>