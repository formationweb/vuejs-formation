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
    <Loader :loading="loading">
      <div :ref="(el) => assignRef(el, index)" v-for="(u, index) in usersFiltered" :key="u.id" >
        <UserCard :user="u" @onDelete="deleteUser"> 
          <template #header>
            <h1>header</h1>
          </template>
          <template #default>
            Contenu par défaut
          </template>
          <template #footer="{ name, isActive }">
            <h2>footer</h2>
           
            Utilisateur {{  name }} est {{ isActive ? 'actif' : 'inactive' }}
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
import { useFetchUsers } from '@/composables/useFetchUsers';

const { getAll, users, loading } = useFetchUsers()
const { users: myUsers } = useFetchUsers()
const {
    extSelected,
    extensions,
    usersFiltered
  } = useExtensionFilter(users)

  console.log(myUsers)

const userCards = ref<HTMLElement[]>([])
const userIndex = ref(0)
const error = ref('')

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


async function deleteUser(id: number) {
  await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
  users.value = users.value.filter(user => user.id != id)
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
</script>

<style scoped>
.red {
  color: red;
}
</style>