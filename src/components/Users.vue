<template>
  <h1>Utilisateurs</h1>

  <!-- <Opacity color="black" :opacity="1" @change="console.log" /> -->

  <select v-model="extSelected">
    <option value="">Tous</option>
    <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
  </select>

  <Loader :loading="loadingUsers">
    <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="removeUser">
      <template #header>
        <header>
          test
        </header>
      </template>
      <template #default>
        <p>dzfefer</p>
      </template>
      <template #footer="{ active, name }">
        <footer>
          L'utilisateur {{ name }} est {{ active }}
        </footer>
      </template>
    </UserCard>
  </Loader>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import UserCard from './UserCard.vue';
import type { User } from '../core/interfaces/user.ts';
import Loader from '../atomics/Loader.vue';
import Opacity from '../atomics/Opacity.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter.ts';
import { useUserManage } from '../composables/useUserManage.ts';
import { useUserStore } from '../stores/user.ts';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const { getAllUsers, loadingUsers, removeUser } = useUserManage()
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)

getAllUsers()
</script>