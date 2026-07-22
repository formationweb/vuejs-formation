<template>
    <h1>Users</h1>
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

const { getAllUser, users, loading } = useFetchUsers()
const { extensions, extSelected, usersFiltered } = useExtensionFilter(users)
const { deleteUser } = useUserManage(users)

getAllUser()

const userOpacity = ref(0.5)

setTimeout(() => {
    userOpacity.value = 0.2
}, 2000)
</script>