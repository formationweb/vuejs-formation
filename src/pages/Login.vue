<template>
    <h1>login</h1>

    <div v-show="!meta.valid && isSubmitting">
        Formulaire invalide
    </div>

    <!-- <div v-show="errors.email && isSubmitting">
        {{ errors.email }}
    </div>

    <div v-show="errors.password && isSubmitting">
        {{ errors.password }}
    </div> -->

    <div v-for="(error, key) in errors" :key="key">
        <div v-show="error && isSubmitting">
            {{ error }}
        </div>
    </div>

    <form @submit.prevent="submitLogin">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Mot de passe</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">

        <button>Se connecter</button>
    </form>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth';
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { object, string } from 'yup';

const authStore = useAuthStore()
//const { token } = storeToRefs(authStore)
const router = useRouter()

const isSubmitting = ref(false)
const { handleSubmit, defineField, errors, meta, setValues } = useForm({
    validationSchema: object({
        email: string()
        .required('Email obligatoire')
        .email()
        .test('email_domain', 'Nom de domaine interdit', (email: string) => {
            return !email.endsWith('gmail.com')
        }),
        password: string().required().min(6)
    })
})

const submitLogin = handleSubmit(async (values) => {
    await authStore.login(values as any)
    router.push({ name: 'home' })
}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

setValues({
    email: 'host@example.com',
    password: 'password123'
})
</script>
