<template>
    <h1>Users</h1>

    <!-- <Opacity color="black" :opacity="0.5" @change="console.log" /> -->
     <!-- <Draw /> -->

     <form @submit.prevent="createUser">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button :aria-busy="loadingCreate" :disabled="loadingCreate">Créer utilisateur</button>
    </form>

    <select v-model="extSelected">
        <option value="">Tous</option>
        <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
    </select>

    <Loader :loading="loading">
        <template #default>
            <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="remove">
                <template #default="{ isActive, name }">
                    <h1>test</h1>
                    <p>L'utilisateur {{ name }} est {{ isActive }}</p>
                </template>
            </UserCard>
        </template>
    </Loader>
</template>

<script lang="ts" setup>
import UserCard from './UserCard.vue';
import Loader from '../atomics/Loader.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter';
import Draw from './Draw.vue';
import { useFetchUsers } from '../composables/useFetchUsers';
import { inject, ref } from 'vue';
import { UserService, type UserPayload } from '../services/users';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';
import { useUser } from '../composables/useUser';

const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const { fetchUsers, loading } = useFetchUsers()
const { remove, create, loadingCreate } = useUser()
const { extensions,extSelected, usersFiltered } = useExtensionFilter(users)

fetchUsers()

const { handleSubmit, defineField, resetForm } = useForm({
    validationSchema: object({
        name: string().required(),
        email: string().required()
    })
})

const createUser = handleSubmit(create as any)

const [email, emailAttrs] = defineField('email')
const [name,nameAttrs] = defineField('name')
</script>