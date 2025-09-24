<template>
    <h1>{{ userModifying?.name }}</h1>

    <form @submit.prevent="editUser">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button>Modifier utilisateur</button>
    </form>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useUserStore, type UserPayload } from '../store/user';
import { useForm } from 'vee-validate';
import type { User } from '../interfaces/User';

const { params } = useRoute()
const userId = +params.id

const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)

const { handleSubmit, defineField, setValues } = useForm()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const editUser = handleSubmit((values) => {
    userStore.updateUser(userId, values as UserPayload)
})

async function init() {
    await userStore.getUser(userId)
    setValues(userModifying.value as User)
}

init() 
</script>