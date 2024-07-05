<template>
  <Loading :loading>
    <h1>{{ wordPlural }}</h1>
    <select v-model="extSelected">
      <option value="">Tous</option>
      <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
    </select>
    <UserCard v-for="u in usersFiltered" :user="u" :key="u.id" @remove="deleteUser">
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
  </Loading>
</template>

<script setup lang="ts">
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useExtensionFilter } from '../../composable/useExtensionFilter';
import { useFetchUsers } from '../../composable/useFetchUsers';
import Loading from '../Loading.vue';
import UserCard from './UserCard.vue';

const { users, loading, getAll } = useFetchUsers()

const extensions: string[] = ['tv', 'biz', 'io', 'me']
const extSelected = ref('')

const word = 'Utilisateur'
const wordPlural = computed(() => word + (users.value.length > 1 ? 's' : ''))
const usersFiltered = useExtensionFilter(users, extSelected)

async function deleteUser(id: number) {
  await axios.delete("https://jsonplaceholder.typicode.com/users/" + id)
  const index = users.value.findIndex(user => user.id == id)
  users.value.splice(index, 1)
}

onMounted(() => {
  getAll()
})
</script>