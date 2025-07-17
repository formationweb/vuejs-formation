<template>
    <h1>Login</h1>

    <div :class="{ red: !meta.valid, green: meta.valid }">
        Un texte
    </div>

    <form @submit.prevent="onLogin">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <div v-if="errors.email && isSubmitting">
            {{  errors.email }}
        </div>

        <label>mot de passe</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">

        <div v-if="errors.password && isSubmitting">
            {{  errors.password }}
        </div>

        <button>Se connecter</button>
    </form>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { object, string } from 'yup';

const isSubmitting = ref(false)
const { handleSubmit, defineField, errors, meta, setFieldValue, setValues } = useForm({
    validationSchema: object({
        email: string().email('Email obligatoire').required()
            .test('email_domain', 'Nom de domaine interdit', (email) => {
                return !email.endsWith('gmail.com')
            }),
        password: string().min(6).required()
    })
})
const auth = useAuthStore()
const router = useRouter()
//const { token } = storeToRefs(auth)

const onLogin = handleSubmit(async (values) => {
    await auth.login(values.email, values.password)
    router.push('/')
}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

setTimeout(() => {
   // setFieldValue('email', 'fzfea@aa.net')
//    setValues({
//     email: 'fzfea@aa.net',
//     password: 'adzfegr'
//    })
}, 1000)
</script>

<style scoped>
.red {
    color: red;
}

.green {
    color: green;
}
</style>