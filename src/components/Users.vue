<template>
    <h1>Utilisateurs</h1>

    <select v-model="extSelected">
        <option value="">Tous</option>
        <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
    </select>

    <Draw />

    <UserCard v-for="u in usersFiltered" :key="u.id" :user="u">
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
</template>

<script lang="ts" setup>
import UserCard from './UserCard.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter';
import Draw from './Draw.vue';

const { extSelected, extensions, usersFiltered } = useExtensionFilter()
</script>