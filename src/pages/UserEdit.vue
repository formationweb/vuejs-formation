<template>
    <h1>{{ userModifying.name }}</h1>

     <form @submit.prevent="editUser">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button>Modifier utilisateur</button>
    </form>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUser } from '../composables/useUser';
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import type { UserPayload } from '../services/users';

const user = useUser()
const userStore = useUserStore()
const { handleSubmit, defineField, setValues } = useForm()
const { params } = useRoute()

const { userModifying } = storeToRefs(userStore)
const userId = params.id === undefined ? null : +params.id

async function run() {
    if (userId) await user.getUser(userId)
    setValues(userModifying.value)
} 

run()

const editUser = handleSubmit(async (values) => {
    await user.updateUser(userModifying.value.id, values as UserPayload)
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')
</script>