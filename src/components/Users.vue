<template>
  <h1 :style="{ color: 'red' }">utilisateurs</h1>
  <!-- <Opacity color="black" :opacity="1" @change="console.log" /> -->
   <!-- <Draw /> -->
   <select v-model="extSelected">
    <option value="">Tous</option>
    <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
   </select>
    <div>
      <input type="number" v-model="userIndex">
      <button @click="scrollToUser">Scroll To User</button>
      <p v-if="error">{{ error }}</p>
    </div>
    <button @click="createUser">Créer utilisateur</button>
    <Loader :loading="false">
      <div :ref="(el) => assignRef(el, index)" v-for="(u, index) in usersFiltered" :key="u.id" >
        <UserCard :user="u"> 
          <template #header>
            <h1>header</h1>
          </template>
          <template #default>
            Contenu par défaut
          </template>
          <template #footer="slotProps">
            <h2>footer</h2>
           
            Utilisateur est {{ slotProps.isActive ? 'actif' : 'inactive' }}
          </template>
        </UserCard>
      </div>
  </Loader>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import type { User } from '../core/interfaces/user';
import UserCard from './UserCard.vue';
import Loader from '@/atomics/Loader.vue';
import Opacity from '@/atomics/Opacity.vue'
import { useExtensionFilter } from '@/composables/useExtensionFilter';
import Draw from './Draw.vue';
import axios from 'axios';

const userCards = ref<HTMLElement[]>([])
const userIndex = ref(0)
const error = ref('')

let users = ref<User[]>([])

function assignRef(el: any, index: number) {
  return userCards.value[index] = el
}

function scrollToUser() {
   const el = userCards.value[userIndex.value]
   if (!el) {
    error.value = 'Index invalide'
    return
   }
   error.value = ''
   el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function getAll() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = res.data
}

async function deleteUser(id: number) {
  await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
} 

async function createUser() {
  const payload = {
    name: 'ana',
    email: 'ana@gamil.com'
  }
  const res = await axios.post('https://jsonplaceholder.typicode.com/users', payload)
  users.value = [
    ...users.value,
    res.data
  ]
}

getAll()

const {
    extSelected,
    extensions,
    usersFiltered
  } = useExtensionFilter(users)
</script>

<style scoped>
.red {
  color: red;
}
</style>