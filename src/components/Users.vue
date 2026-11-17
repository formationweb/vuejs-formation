<template>
    <h1>Users</h1>

    <!-- <Opacity :opacity="0.5" color="black" @change="console.log" /> -->

    <select v-model="extSelected">
        <option v-for="ext in extensions" :key="ext">
            {{ ext }}
        </option>
    </select>

    <Loader :loading="loadingUsers">
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="deleteUser">
            <template #header>
                    <h1>test</h1>
            </template>
            <template #default>
                    contenu
            </template>
            <template #footer="{ active, name }">
                    L'utilisateur {{ name }} est {{ active }}
            </template>
        </UserCard>
    </Loader>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { User } from '../core/interfaces/user.ts';
import UserCard from './UserCard.vue';
import Loader from '../atomics/Loader.vue';
import Opacity from '../atomics/Opacity.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter.ts';
import { useFetchUsers } from '../composables/useFetchUsers.ts';
import { useUserManage } from '../composables/useUserManage.ts';

const { users, getAllUsers, loadingUsers } = useFetchUsers()
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)
const { deleteUser } = useUserManage(users)

getAllUsers()
</script>