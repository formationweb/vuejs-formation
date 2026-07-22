<template>
    <h1>Users</h1>

    <div v-show="!meta.valid">
        Formulaire invalide
        <div v-show="errors.email">
            {{ errors.email }}
        </div>
        <div v-show="errors.name">
            {{ errors.name }}
        </div>
    </div>

    <form @submit.prevent="submitCreateUser">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="password" v-model="name" v-bind="nameAttrs">

        <button 
            :aria-busy="loadingCreate" 
            :disabled="loadingCreate">Créer utilisateur</button>
    </form>

    <!-- <Opacity :opacity="userOpacity" color="black" @change="console.log" /> -->
     <select v-model="extSelected">
        <option value="">Tous</option>
        <option v-for="ext in extensions">{{ ext }}</option>
     </select>
    <Loader :loading="loading">
        <UserCard v-for="u in usersFiltered" 
            :key="u.id" :user="u" @onDelete="deleteUser">
            <template #header>
                <h1>Titre</h1>
            </template>
            <template #default>
                le contenu
            </template>
            <template #footer="{ isActive, name }">
                <h2>Footer</h2>
                L'utilisateur {{ name }} est {{ isActive }}
            </template>
        </UserCard>
    </Loader>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import UserCard from './UserCard.vue';
import type { User } from '@/core/interfaces/user.ts';
import Loader from '../atomics/Loader.vue';
import Opacity from '../atomics/Opacity.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter.ts';
import axios from 'axios';
import { useFetchUsers } from '../composables/useFetchUsers.ts';
import { useUserManage } from '../composables/useUserManage.ts';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import type { UserCreatePayload } from '../core/services/user.ts';

const { getAllUser, users, loading } = useFetchUsers()
const { extensions, extSelected, usersFiltered } = useExtensionFilter(users)
const { deleteUser, createUser, loadingCreate } = useUserManage(users)

const { handleSubmit, defineField, meta, errors, resetForm, setFieldValue, setValues } = useForm({
    validationSchema: object({
        email: string().email('Email obligatoire').required(),
        name: string().required()
    })
})

const submitCreateUser = handleSubmit(async (values) => {
    await createUser(values as UserCreatePayload)
    resetForm()
})

setTimeout(() => {
   // setFieldValue('email', 'zfez')
   setValues({
     email: 'fefe',
     name: 'ergr'
   })
}, 1000)

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

getAllUser()

const userOpacity = ref(0.5)

setTimeout(() => {
    userOpacity.value = 0.2
}, 2000)
</script>