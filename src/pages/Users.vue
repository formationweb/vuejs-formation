<template>
    <Loading :loading="loading">
        <h1>{{ wordPlural }}</h1>
        <select v-model="extSelected">
            <option value="">Tous</option>
            <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
        </select>
        <button @click="createUser">Créer utilisateur</button>
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @remove="deleteUser">
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

const extensions = reactive(['biz', 'io', 'me', 'tv'])
const { getAll, loading, users } = useFetchUsers()

getAll()

async function createUser() {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/users', {
        name: 'ana',
        email: 'ana@gmail.com'
    })
    users.value.push(response.data)
}

async function deleteUser(userId: number) {
    await axios.delete(import.meta.env.VITE_API_URL + '/users/' + userId)
    const index = users.value.findIndex(user => user.id == userId)
    users.value.splice(index, 1)
}

const word = 'Utilisateur'
const wordPlural = computed(() => {
    return word + (users.value.length > 1 ? 's' : '')
})

const extSelected = ref('')
const usersFiltered = useExtensionFilter(users, extSelected)
</script>