<template>
    <h1>{{ userModifying.name }}</h1>
    <form @submit.prevent="editUser">
         <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button>Modifier utilisateur</button>
    </form>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '../stores/user';
import { useUserManage } from '../composables/useUserManage';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { watchEffect } from 'vue';
import type { UserPayload } from '../services/users';

const { params } = useRoute()
const userStore = useUserStore()
const userManage = useUserManage()

const userId = params.id === undefined ? null : +params.id
const { userModifying } = storeToRefs(userStore)

if (userId) userManage.getUser(userId)

const { handleSubmit, defineField, setValues } = useForm()

const editUser = handleSubmit(async (values) => {
    if (userId) userManage.updateUser(userId, values as UserPayload)
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

watchEffect(() => {
    setValues(userModifying.value)
})
</script>