<template>
    <h1>{{ userModifying?.name }}</h1>

    <form @submit.prevent="update">

      <label>Email</label>
      <input type="text" v-model="email" v-bind="emailAttrs">

      <label>Nom</label>
      <input type="text" v-model="name" v-bind="nameAttrs">

      <button>Modifier utilisateur</button>
  </form>
</template>

<script lang="ts" setup>
import { getUser, updateUser } from '@/composables/useUsers';
import type { UserPayload } from '@/services/user';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute()
const { getCurrentUser } = getUser()
const userStore = useUserStore()
const { updateCurrentUser } = updateUser() 
const { userModifying } = storeToRefs(userStore)

const userId = params.id == undefined ? null : +params.id

const { handleSubmit, defineField, setValues } = useForm()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const update = handleSubmit(async (values) => {
    if(userId) await updateCurrentUser(userId, values as UserPayload)
})

onMounted(async () => {
    if(userId) await getCurrentUser(userId)
    if (userModifying.value) {
        setValues(userModifying.value)
    }
})
</script>