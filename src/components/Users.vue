<template>
    <h1>Utilisateurs</h1>

    <select v-model="extSelected">
        <option value="">Tous</option>
        <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
    </select>

    <form @submit.prevent="createUser">
        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <button :aria-busy="loadingCreate" :disabled="loadingCreate">Créer utilisateur</button>
    </form>

    <div v-if="!loading">
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="userStore.deleteUser">
            <template #title>
                <h1>Test</h1>
            </template>
            <template #default>
                <p>Contenu par défaut</p>
            </template>
            <template #footer="{ name, active}">
                L'utilisateur {{ name }} est {{  active ? 'actif' : 'inactif' }}
            </template>
        </UserCard>
    </div>
    <div v-else aria-busy="true"></div>
</template>

<script lang="ts" setup>
import UserCard from './UserCard.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter';
import Draw from './Draw.vue';
import { useFetchUsers } from '../composables/useFetchUsers';
import axios from 'axios';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { ref } from 'vue';
import { useUserStore, type UserPayload } from '../store/user';
import { storeToRefs } from 'pinia';

const { getAll, loading } = useFetchUsers()
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)

const { handleSubmit, defineField, resetForm } = useForm({
    validationSchema: object({
        name: string().required(),
        email: string().required()
    })
})

const loadingCreate = ref(false)

const createUser = handleSubmit(async (values) => {
    loadingCreate.value = true
    await userStore.createUser(values as UserPayload)
    loadingCreate.value = false
    resetForm()
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')


getAll()
</script>