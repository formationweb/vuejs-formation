<template>
    <!-- <Opacity color="red" :opacity="0.5" @change="console.log" /> -->
    <Loader :loading>
        <h1>Utilisateurs</h1>

        <form @submit.prevent="createUser">

            <label>Email</label>
            <input type="text" v-model="email" v-bind="emailAttrs">
            {{ errors.email }}

            <label>Nom</label>
            <input type="text" v-model="name" v-bind="nameAttrs">
            {{ errors.name }}

            <button :aria-busy="loadingCreate" :disabled="loadingCreate">
                {{ loadingCreate ? '' : 'Créer un utilisateur' }}
            </button>
        </form>

        <!-- liste déroulante-->
        <select v-model="extSelected">
            <option value="">Tous</option>
            <option v-for="ext in extensions">{{ ext }}</option>
        </select>
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="userStore.deleteUser">
            <template #title>
                <h1>Texte</h1>
            </template>
            <template #default>
                Par défaut
            </template>
            <template #footer="{ name, active }">
                <div>
                    <p>L'utilisateur {{ name }} est <span :style="{ color: active ? 'green' : 'red' }">{{ active ?
                            'actif' : 'inactif' }}</span> </p>
                </div>
            </template>
        </UserCard>
    </Loader>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import UserCard from './UserCard.vue';
import Loader from '../atomics/Loader.vue';
import Draw from './Draw.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter';
import Opacity from '../atomics/Opacity.vue';
import { useFetchUsers } from '@/composables/useFetchUsers';
import { useUserStore, type UserPayload } from "@/store/user"
import axios from 'axios';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { storeToRefs } from 'pinia';

const { loading, getAll } = useFetchUsers()
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)
const { handleSubmit, defineField, errors, resetForm } = useForm({
    validationSchema: object({
        name: string().required(),
        email: string().required()
    })
})
const loadingCreate = ref(false)

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const createUser = handleSubmit(async (values) => {
    loadingCreate.value = true
    await userStore.createUser(values as UserPayload)
    loadingCreate.value = false
    resetForm()
})

onMounted(() => {
    getAll()
})
</script>