<template>
    <h1>Users</h1>

    <!-- <Opacity :opacity="0.5" color="black" @change="console.log" /> -->

    <select v-model="extSelected">
        <option v-for="ext in extensions" :key="ext">
            {{ ext }}
        </option>
    </select>

    <form @submit.prevent="addUser">
         <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button :aria-busy="loadingCreate" :disabled="loadingCreate">Créer utilisateur</button>
    </form>

    <Loader :loading="loadingUsers">
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="deleteUser">
            <template #header>
                    <h1>test</h1>
            </template>
            <template #default>
                    contenu
            </template>
            <template #footer="{ active, name }">
                    L'utilisateur {{ name }} est {{ active }}
            </template>
        </UserCard>
    </Loader>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { User } from '../core/interfaces/user.ts';
import UserCard from './UserCard.vue';
import Loader from '../atomics/Loader.vue';
import Opacity from '../atomics/Opacity.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter.ts';
import { useFetchUsers } from '../composables/useFetchUsers.ts';
import { useUserManage } from '../composables/useUserManage.ts';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { create } from 'axios';
import type { UserPayload } from '../services/users.ts';

const { users, getAllUsers, loadingUsers } = useFetchUsers()
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)
const { deleteUser, createUser, loadingCreate } = useUserManage(users)

getAllUsers()

const { handleSubmit, defineField, meta, errors, resetForm, setFieldValue, setValues } = useForm({
    validationSchema: object({
        email: string()
            .required('Email obligatoire'),
        name: string().required()
    })
})

setTimeout(() => {
    //setFieldValue('email', 'fzlf')
    setValues({
        email: 'fefve',
        name: 'fefmmm'
    })
}, 2000)

const submitting = ref(false)

const addUser = handleSubmit(async (values) => {
    submitting.value = true
    await createUser(values as UserPayload)
    resetForm()
    submitting.value = false
}, () => {
    submitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')
</script>