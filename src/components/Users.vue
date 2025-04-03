<template>
    <!-- <Opacity color="red" :opacity="0.5" @change="console.log" /> -->
    <Loader :loading>
        <h1>Utilisateurs</h1>
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
import { onMounted, ref, type Ref } from 'vue';
import type { User } from '../interfaces/User';
import UserCard from './UserCard.vue';
import Loader from '../atomics/Loader.vue';
import Draw from './Draw.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter';
import Opacity from '../atomics/Opacity.vue';
import axios from 'axios';

const users: Ref<User[]> = ref([])
const loading = ref(true)

onMounted(async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    users.value = res.data
    loading.value = false
})

const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)
</script>