<template>
    <Loading :loading="loading">
        <h1>{{ wordPlural }}</h1>
        <select v-model="extSelected">
            <option value="">Tous</option>
            <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
        </select>
        <form @submit="createUser" novalidate>
            <label>Nom</label>
            <input type="text" v-bind="name">
            <div>{{ errors.name }}</div>

            <label>Email</label>
            <input type="email" v-bind="email">
            <div>{{ errors.email }}</div>
            <button :aria-busy="loadingCreate" :disabled="loadingCreate">Créer utilisateur</button>
        </form>
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @remove="userStore.deleteUser">
            <template #header>
                <h1>Utilisateur</h1>
            </template>
            <template #default>
                un texte par défaut
            </template>
            <template #footer="slotProps">
                <div>
                    L'utilisateur {{ u.name }} est {{ slotProps.actived ? 'actif' : 'inactif' }}
                </div>
            </template>
        </UserCard>
    </Loading>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import UserCard from '@/components/user/UserCard.vue'
import { useExtensionFilter } from '@/composable/useExtensionFilter'
import { useFetchUsers } from '@/composable/useFetchUsers'
import Loading from '@/components/Loading.vue'
import axios from 'axios'
import { useForm, useIsSubmitting } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()

const { defineInputBinds, handleSubmit, errors, meta } = useForm({
    validationSchema: {
        name: yup.string().required(),
        email: yup.string().email().required()
    }
})

const isSubmitting = useIsSubmitting();

const extensions = reactive(['biz', 'io', 'me', 'tv'])
const { getAll, loading } = useFetchUsers()

getAll()

const word = 'Utilisateur'
const wordPlural = computed(() => {
    return word + (userStore.users.length > 1 ? 's' : '')
})

const extSelected = ref('')
const loadingCreate = ref(false)
const { users } = storeToRefs(userStore)
const usersFiltered = useExtensionFilter(users, extSelected)

const name = defineInputBinds('name')
const email = defineInputBinds('email')

const createUser = handleSubmit(async (values: any) => {
    loadingCreate.value = true
    await userStore.createUser(values)
    loadingCreate.value = false
})
</script>