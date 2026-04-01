<template>
    <h1>Login</h1>

    <div v-show="!meta.valid && isSubmitting">
        Formulaire invalide !
    </div>

    <!-- <div v-show="errors.email && isSubmitting">
        {{ errors.email }}
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

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { object, string } from 'yup';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore()
const router = useRouter()

const isSubmitting = ref(false)
// const { token } = storeToRefs(authStore)

function domainValidator(domainName: string) {
    return (email: string) => {
        return !email.endsWith(domainName)
    }
}

const { handleSubmit, defineField, meta, errors, setFieldValue, setValues } = useForm({
    validationSchema: object({
        email: string()
            .required('Email obligatoire')
            .email()
            .test('email_domain', 'Nom de domaine interdit', domainValidator('gmail.com')),
        password: string().required().min(6)
    })
})

//setFieldValue('email', 'fefe')

setValues({
    email: 'dzdza',
    password: 'fefef'
})

const submitLogin = handleSubmit(async (values) => {
    await authStore.login(values as any)
    isSubmitting.value = true
    router.push({
        name: 'home'
    })
}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
</script>