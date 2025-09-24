<template>
    <h1>login</h1>

    <div v-show="!meta.valid && isSubmitting">
        Formulaire invalide
    </div>

    <form @submit.prevent="login">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <div v-show="errors.email && isSubmitting">
            {{ errors.email }}
        </div>

        <label>Mot de passe</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">

        <div v-show="errors.password && isSubmitting">
            {{ errors.password }}
        </div>

        <button>Se connecter</button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { object, string } from 'yup';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const isSubmitting = ref(false)
const authStore = useAuthStore()
const router = useRouter()

const { handleSubmit, defineField, errors, meta, setFieldValue, setValues } = useForm({
    validationSchema: object({
        email: string()
            .required('Email obligatoire')
            .test('email_domain', 'Nom de domaine interdit', (email: string) => {
                return !email.endsWith('gmail.com')
            }),
        password: string().min(6).required()
    })
})

// prendre les états, en en faire des refs
//const { token } = storeToRefs(authStore)

const login = handleSubmit(async (values) => {
    await authStore.login(values.email, values.password)
    router.push({ name: 'home' })
}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

setTimeout(() => {
    // setFieldValue('email', 'zatdzdza@asadad.net')
    // setFieldValue('password', 'dazfe')
    setValues({
        email: 'zatdzdza@asadad.net',
        password: 'fefgre'
    })
}, 1000)
</script>