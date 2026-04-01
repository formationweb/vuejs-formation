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
            <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="removeUser">
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

const { users, fetchUsers, loading } = useFetchUsers()
const { extensions,extSelected, usersFiltered } = useExtensionFilter(users)

fetchUsers()

const userService = inject<UserService>('userService')
async function removeUser(id: number) {
      await userService?.deleteUser(id)
      users.value = users.value.filter(user => user.id != id)
}

const { handleSubmit, defineField, resetForm } = useForm({
    validationSchema: object({
        name: string().required(),
        email: string().required()
    })
})

const loadingCreate = ref(false)

const createUser = handleSubmit(async (values) => {
    loadingCreate.value = true
    const user = await userService?.createUser(values as UserPayload)
    if (user) {
        users.value = [
            ...users.value,
            user
        ]
        resetForm()
    }
     loadingCreate.value = false
})

const [email, emailAttrs] = defineField('email')
const [name,nameAttrs] = defineField('name')
</script>