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
    <UserCard v-for="u in usersFiltered" :user="u" :key="u.id" @remove="userStore.deleteUser">
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
import Loading from '@/components/Loading.vue';
import UserCard from '@/components/users/UserCard.vue';
import { useExtensionFilter } from '@/composable/useExtensionFilter';
import { useFetchUsers } from '@/composable/useFetchUsers';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { computed, onMounted, ref } from 'vue';
import * as yup from 'yup';
import { UserPayload, useUserStore } from '../store/user';

const { loading, getAll } = useFetchUsers()
const { handleSubmit, defineField, errors } = useForm({
  validationSchema: {
    email: yup.string().email().required(),
    name: yup.string().required()
  }
})
const userStore = useUserStore()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')
const loadingCreate = ref(false)

const extensions: string[] = ['tv', 'biz', 'io', 'me']
const extSelected = ref('')
const { users } = storeToRefs(userStore)

const word = 'Utilisateur'
const wordPlural = computed(() => word + (userStore.users.length > 1 ? 's' : ''))
const usersFiltered = useExtensionFilter(users, extSelected)

// @ts-ignore
const createUser = handleSubmit(async (values, { resetForm }) => {
  loadingCreate.value = true
  userStore.createUser(values as UserPayload)
  loadingCreate.value = false
  resetForm()
})


onMounted(() => {
  getAll()
})
</script>