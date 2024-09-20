<template>
    <h1>Login</h1>

    <div :class="{ red: !meta.valid, green: meta.valid }">
        Un texte
    </div>

    <div :style="{ color: 'red', fontWeight: 'bold' }">
        Un texte 2
    </div>

    <form @submit.prevent="onSubmit">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">
        <div v-if="isSubmitting">
            {{ errors.email }}
        </div>

        <label>mot de passe</label>
        <input type="password" v-model="password" v-bind="passwordAttrs">
        <div v-if="isSubmitting">
            {{ errors.password }}
        </div>

        <button>Connexion</button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { object, string } from 'yup'
import { useAuthStore } from '../store/auth';
//import { storeToRefs } from 'pinia';

const isSubmitting = ref(false)

const { handleSubmit, defineField, errors, meta } = useForm({
    validationSchema: object({
        email: string().email().required()
            .test('email_domain', 'Nom de domaine interdit', (value) => {
                return !value.endsWith('gmail.com')
            }),
        password: string().min(6).required()
    }),
    // initialValues: {
    //     email: 'ana@gmail.com'
    // }
})
const router = useRouter()
const authStore = useAuthStore()
//const { token } = storeToRefs(authStore)

const onSubmit = handleSubmit(async (values) => {
    await authStore.login(values.email, values.password)
    router.push('/')
}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

//setFieldValue('email', 'ana@gmail.com')

// setValues({
//     email: 'ana@gmail.com',
//     password: 'azerty'
// })
</script>

<style scoped>
.red {
    color: red;
}

.green {
    color: green;
}
</style>