<template>
    <h1>Login</h1>

    <div :class="{ red: !meta.valid, green: meta.valid }">
        Un texte
    </div>

    <div :style="{ color: 'red', fontWeight: 'bold' }">texte 2</div>

    <form @submit.prevent="onSubmit" novalidate>
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">
        <div>{{ errors.email }}</div>

        <label>Mot de passe</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">
        <div>{{ errors.password }}</div>

        <button>Connexion</button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { useAuthStore } from '../store/auth';

const { handleSubmit, defineField, errors, meta } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required()
            .test('email_domain', 'Nom de domaine interdit', (value) => {
                return !value.endsWith('gmail.com')
            }),
        password: yup.string().min(6).required()
    })
})

const authStore = useAuthStore()
const router = useRouter()

const onSubmit = handleSubmit(async (values) => {
    await authStore.login(values.email, values.password)
    router.push('/')
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

//setFieldValue('email', 'test@test.com')

/*
setValues({
    email: 'test@test.com',
    password: 'azerty'
})
    */
</script>

<style scoped>
.red {
    color: red;
}

.green {
    color: green;
}
</style>