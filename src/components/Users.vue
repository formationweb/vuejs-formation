<template>
  <h1>Users</h1>
  <ConfirmDialog
    :open="showDialog"
    @cancel="showDialog = false"
    @confirm="deleteUser"
  >
    <template #header>
      <h2>Supprimer l'utilisateur ?</h2>
    </template>

    <p>Cette action est irréversible.</p>
  </ConfirmDialog>
  <button @click="showDialog = true">Montrer confirm dialog</button>
  <select v-model="extension">
    <option value="">Tous</option>
    <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
  </select>
  <Loader :loading="loading">
    <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="deleteUser">
      <template #head>
        <header>Titre de la carte</header>
      </template>
      <template #default>
        <p>Contenu</p>
      </template>
      <template #foot="{ name, isActive }">
        <footer>Pied de page</footer>
        <p>L'utilisateur {{ name }} est {{ isActive }}</p>
      </template>
    </UserCard>
  </Loader>
</template>

<script setup lang="ts">
import type { User } from "@/core/interfaces/user";
import UserCard from "./UserCard.vue";
import { computed, onMounted, ref } from "vue";
import Loader from "@/atomics/Loader.vue";
import Opacity from "@/atomics/Opacity.vue";
import ConfirmDialog from "@/ui/ConfirmDialog.vue";
import { useExtentionFilter } from "@/composables/useExtentionFilter.ts";
import axios from "axios";
import { useFetchUsers } from "@/composables/useFetchUsers.ts";

const showDialog = ref(false);

function deleteUser() {
  console.log("ok");
  showDialog.value = false;
}

const { users, getAllUser, loading } = useFetchUsers()
const { extension, extensions, usersFiltered } = useExtentionFilter(users);

getAllUser()
</script>
