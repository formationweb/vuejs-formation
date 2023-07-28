<template>
    <h1>Login</h1>
    <div :class="{
        red: !meta.valid,
        green: meta.valid
    }">
        Un texte
    </div>
    <div :style="{
        color: 'red',
        fontWeight: 'bold'
    }">
        Un texte2
    </div>
    <form @submit.prevent="onSubmit" novalidate>
        <label>Email</label>
        <input type="email" v-bind="email">
        <div>{{  errors.email }}</div>
        
        <label>Mot de passe</label>
        <input type="password" v-bind="password">
        <div>{{ errors.password }}</div>

        <button>Se connecter</button>
    </form>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const { defineInputBinds, handleSubmit, errors, meta, setFieldValue, setValues } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required().test('email_domain', 'Nom de domain interdit', (value) => {
            return !value.endsWith('gmail.com')
        }),
        password: yup.string().min(6).required()
    })
})

//setFieldValue('email', 'test@test.com')
/*setValues({
    email: 'test@test.com',
    password: 'azerty'
})*/

watch(() => meta.value.valid, (newValue) => {
    console.log(newValue)
})

const onSubmit = handleSubmit(async (values: any) => {
    await authStore.login(values)
    // nullish
    router.push((router.currentRoute.value.query.redirect as string) ?? '/')
})

const email = defineInputBinds('email')
const password = defineInputBinds('password')
</script>

<style scoped>
.red {
    color: red;
}

.bold {
    font-weight: bold;
}

.green {
    color: green;
}
</style>