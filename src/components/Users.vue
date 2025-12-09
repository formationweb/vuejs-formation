<template>
  <h1>utilisateurs</h1>
  <select v-model="extSelected">
    <option value="">Tous</option>
    <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
  </select>
  <Loader :loading="loading">
    <UserCard v-for="u in usersFiltered" :key="u.id" :user="u">
      <template #header="{ name }">
          <h1>{{ name }}</h1>
      </template>
      <template #default>
        default slot
      </template>
      <template #footer="{ active, name }">
        <p 
          :class="{ red: !active, green: active }"
          :style="{ fontWeight: active ? 'bold' : 'normal' }"
        >Est ce utilisateur {{ name }} est {{ active }}</p>
      </template>
    </UserCard>
  </Loader>
</template>

<script setup lang="ts">
import type { User } from '@/core/interfaces/User';
import UserCard from './UserCard.vue';
import Loader from '@/atomics/Loader.vue'
import { computed, ref } from 'vue';
import { useExtensionFilter } from '@/composables/useExtensionFilter';
import axios from 'axios';
import { useFetchUsers } from '@/composables/useFetchUsers';

const { users, loading, getAll } = useFetchUsers()
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)

getAll()
</script>

<style scoped>
.red {
    color: red;
}

.green {
  color: green;
}
</style>