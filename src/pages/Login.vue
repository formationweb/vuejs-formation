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

const isSubmitting = ref(false)

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
            .test('email_domain', 'Nom de domaine interdit', domainValidator('gmail.com')),
        password: string().required().min(6)
    })
})

const submitLogin = handleSubmit((values) => {
    console.log(values)
    isSubmitting.value = true
}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
</script>