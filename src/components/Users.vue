<template>
    <h1>Utilisateurs</h1>

    <select v-model="extSelected">
        <option value="">Tous</option>
        <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
    </select>

    <Draw />

    <div v-if="!loading">
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="deleteUser">
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

const { users, getAll, loading } = useFetchUsers()
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)

async function deleteUser(id: number) {
    await axios.delete("https://jsonplaceholder.typicode.com/users/" + id)
    users.value = users.value.filter(user => user.id != id)
}

getAll()
</script>