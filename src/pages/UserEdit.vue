<template>
    <h1>{{ userModifying.name }}</h1>

    <form @submit.prevent="edit">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button>Modifier</button>
    </form>
</template>

<script setup lang="ts">
import { useUser } from '@/composables/useUser';
import { useForm } from 'vee-validate';
import { useRoute } from 'vue-router';
const { get, userModifying } = useUser()

const { params } = useRoute()
const userId = params.id == undefined ? null : +params.id

const { defineField, handleSubmit, setFieldValue, setValues } = useForm()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

get(userId!).then(() => {
    // setFieldValue('email', userModifying.value.email)
    // setFieldValue('name',  userModifying.value.name)
    setValues(userModifying.value)
})

const edit = handleSubmit((values) => {
    console.log(values)
})
</script>