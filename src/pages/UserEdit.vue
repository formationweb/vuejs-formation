<template>
    <h1>{{ userStore.user?.name  }}</h1>

    <form @submit="onSubmit" novalidate>
        <label>Email</label>
        <input type="email" v-bind="email">

        <label>Username</label>
        <input type="text" v-bind="username">

        <label>Nom</label>
        <input type="text" v-bind="name">

        <button>Modifier</button>
    </form>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useForm } from 'vee-validate'
import { useUserStore } from '@/store/user';

const route = useRoute()
const userStore = useUserStore()
const { handleSubmit, defineInputBinds, setValues } = useForm()
const userId = route.params.id as string

const email = defineInputBinds('email')
const username = defineInputBinds('username')
const name = defineInputBinds('name')

const onSubmit = handleSubmit((values: any) => {
    userStore.updateUser(userId, values)
})

userStore.getUser(userId).then(() => {
    setValues(userStore.user!)
})
</script>