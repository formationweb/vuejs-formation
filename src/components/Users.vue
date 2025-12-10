<template>
  <h1>utilisateurs</h1>

  <form @submit.prevent="submitCreate">
      <div v-show="errors.email">
      {{ errors.email }}
      </div>

      <label>Email</label>
      <input type="text" v-model="email" v-bind="emailAttrs">

      <label>Nom</label>
      <input type="text" v-model="name" v-bind="nameAttrs">

      <button :aria-busy="loadingCreate" :disabled="loadingCreate">Créer utilisateur</button>
  </form>
 
  <select v-model="extSelected">
    <option value="">Tous</option>
    <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
  </select>
  <Loader :loading="loading">
    <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @deleteUser="remove">
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
import { deleteUser, createUser, type UserPayload } from '@/composables/useUsers';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';

const { users, loading, getAll } = useFetchUsers()
const { extSelected, extensions, usersFiltered } = useExtensionFilter(users)
const { remove } = deleteUser(users)
const { create, loadingCreate } = createUser(users)

const { handleSubmit, defineField, errors, resetForm, setFieldValue, setValues } = useForm({
    validationSchema: object({
        email: string().required('Email obligatoire'),
        name: string().required()
    })
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const submitCreate = handleSubmit(async (values) => {
    await create(values as UserPayload)
    resetForm()
})

setTimeout(() => {
  //setFieldValue('email', 'fzffe')
  setValues({
    email: 'fefe',
    name: 'fefr'
  })
}, 1000)

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