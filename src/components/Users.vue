<template>
    <h1>Users</h1>

    <!-- <Opacity color="black" :opacity="0.5" @change="console.log" /> -->
     <Draw />

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
import { inject } from 'vue';
import { UserService } from '../services/users';

const { users, fetchUsers, loading } = useFetchUsers()
const { extensions,extSelected, usersFiltered } = useExtensionFilter(users)

fetchUsers()

const userService = inject<UserService>('userService')
async function removeUser(id: number) {
      await userService?.deleteUser(id)
      users.value = users.value.filter(user => user.id != id)
}
</script>