<template>
  <Loading :loading>
    <h1>{{ wordPlural }}</h1>
    <form @submit="createUser" novalidate>
      <label>Nom</label>
      <input type="text" v-model="name" v-bind="nameAttrs">
      <div>{{ errors.name }}</div>

      <label>Email</label>
      <input type="email" v-model="email" v-bind="emailAttrs">
      <div>{{ errors.email }}</div>

      <button :aria-busy="loadingCreate" :disabled="loadingCreate">
        {{ loadingCreate ? '' : 'Créer utilisateur' }}
      </button>
    </form>
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
import { useForm } from 'vee-validate';
import { computed, onMounted, ref } from 'vue';
import * as yup from 'yup';
import { useExtensionFilter } from '../../composable/useExtensionFilter';
import { useFetchUsers } from '../../composable/useFetchUsers';
import Loading from '../Loading.vue';
import UserCard from './UserCard.vue';

const { users, loading, getAll } = useFetchUsers()
const { handleSubmit, defineField, errors } = useForm({
  validationSchema: {
    email: yup.string().email().required(),
    name: yup.string().required()
  }
})
const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')
const loadingCreate = ref(false)

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

const createUser = handleSubmit(async (values, { resetForm }) => {
  loadingCreate.value = true
  const { data } = await axios.post("https://jsonplaceholder.typicode.com/users", values)
  users.value.push(data)
  loadingCreate.value = false
  resetForm()
})

onMounted(() => {
  getAll()
})
</script>