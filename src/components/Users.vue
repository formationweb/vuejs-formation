<template>
    <!-- <Opacity color="red" :opacity="0.5" @change="console.log" /> -->
    <Loader :loading>
        <h1>Utilisateurs</h1>

        <button @click="createUser">Créer un utilisateur</button>

        <!-- liste déroulante-->
        <select v-model="extSelected">
            <option value="">Tous</option>
            <option v-for="ext in extensions">{{ ext }}</option>
        </select>
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u">
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
import { onMounted } from 'vue';
import UserCard from './UserCard.vue';
import Loader from '../atomics/Loader.vue';
import Draw from './Draw.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter';
import Opacity from '../atomics/Opacity.vue';
import { useFetchUsers } from '../composables/useFetchUsers';
import axios from 'axios';

const { users, loading, getAll } = useFetchUsers()
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)

async function createUser() {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name: 'ana',
        email: 'ana@gmail.tv'
    })
    const userCreated = res.data
    users.value.push(userCreated)
}

onMounted(() => {
    getAll()
})
</script>