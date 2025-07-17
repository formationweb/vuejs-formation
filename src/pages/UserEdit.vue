<template>
    <h1>{{ userModifying?.name }}</h1>
    <form @submit.prevent="onEdit">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button>Modifier</button>
    </form>
</template>

<script lang="ts" setup>
import { useUserStore, type UserPayload } from '@/store/user';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useForm } from 'vee-validate'
import type { User } from '@/core/interfaces/user';


const { params } = useRoute()
const userId = +params.id

const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)
const { defineField, handleSubmit, setValues } = useForm()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const onEdit = handleSubmit((values) => {
   userStore.updateUser(userId, values as UserPayload)
})

userStore.getUser(userId).then(() => {
    setValues(userModifying.value as User)
})
</script>