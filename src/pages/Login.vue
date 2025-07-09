<template>
    <h1>Login</h1>

    <div :class="{ red: !meta.valid, green: meta.valid }">
        Un texte
    </div>

    <form @submit.prevent="onLogin">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <div v-if="isSubmitting">
            {{ errors.email }}
        </div>

        <label>Mot de passe</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">

        <div v-if="isSubmitting">
            {{ errors.password }}
        </div>

        <button>Connexion</button>
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

const { setFieldValue, handleSubmit, defineField, errors, meta, setValues } = useForm({
    validationSchema: object({
        email: string().email().required('Email obligatoire').test('email_domain', 'Nom de domaine interdit', (email) => {
                return !email.endsWith('gmail.com')
            }),
        password: string().min(6).required()
    })
})

const authStore = useAuthStore()
const router = useRouter()
// prendre les états, et en faire des refs
//const { token } = storeToRefs(authStore)

const onLogin = handleSubmit(async (values) => {
    await authStore.login(values.email, values.password)
    router.push('/')
}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

// setTimeout(() => {
//     //setFieldValue('email', 'test@adz.net')
//     setValues({
//         email: 'test@adz.net',
//         password: 'test'
//     })
// }, 1000)
</script>

<style scoped>
.red {
    color: red;
}

.green {
    color: green;
}
</style>