<template>
    <h1>{{ userModifying.name }}</h1>

    <form @submit.prevent="editUser">
        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">
        <div>{{ errors.name }}</div>

        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">
        <div>{{ errors.email }}</div>

        <button>Modifier utilisateur</button>
    </form>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserStore } from '../store/user';
import { onMounted, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserForm } from '../composable/useUserForm';

const route = useRoute()
const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)
const userId = +route.params.id

const { defineField, errors, editUser, setValues } = useUserForm()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

watchEffect(() => {
    setValues(userModifying.value)
})

onMounted(() => {
    userStore.get(userId)
})
</script>