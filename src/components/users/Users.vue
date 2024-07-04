<template>
  <h1>{{ wordPlural }}</h1>
  <select v-model="extSelected">
    <option value="">Tous</option>
    <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
  </select>
  <UserCard v-for="u in usersFiltered" :user="u" :key="u.id">
    <template #header>
      <h1>Titre</h1>
    </template>
    <template #default>
      <p>Texte par défaut</p>
    </template>
    <template #footer="slotProps">
      <p>L'utilisateur {{ slotProps.name }} est {{ slotProps.active }}</p>
    </template>
  </UserCard>
</template>

<script setup lang="ts">
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useExtensionFilter } from '../../composable/useExtensionFilter';
import type { User } from '../../interfaces/User';
import UserCard from './UserCard.vue';

const users = ref<User[]>([])
const extensions: string[] = ['tv', 'biz', 'io', 'me']
const extSelected = ref('')

const word = 'Utilisateur'
const wordPlural = computed(() => word + (users.value.length > 1 ? 's' : ''))
const usersFiltered = useExtensionFilter(users, extSelected)

onMounted(async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = res.data
})
</script>