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

        <button>Se connecter</button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { object, string } from 'yup';

const isSubmitting = ref(false)

const { defineField, handleSubmit, errors, setFieldValue, setValues, meta } = useForm({
    validationSchema: object({
        email: string().email().required('Email obligatoire')
            .test('email_domain', 'Nom de domaine interdit', (value) => {
                return !value.endsWith('gmail.com')
            }),
        password: string().min(6).required()
    })
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onLogin = handleSubmit((values) => {
    console.log(values)
}, () => {
    isSubmitting.value = true
})

// setTimeout(() => {
//    setFieldValue('email', 'test@etst.net')
//    setValues({
//     email: 'dzfzaa@aa.net',
//     password: 'test'
//    })
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