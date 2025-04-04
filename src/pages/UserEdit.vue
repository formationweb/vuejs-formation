<template>
    <h1>{{ userModifying?.name }}</h1>

    <form @submit.prevent="onEdit">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">
        
        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button>Modifier</button>
    </form>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore, type UserPayload } from '../store/user';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';

const { params } = useRoute()
const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)
const userId = +params.id

const { defineField, handleSubmit, setValues } = useForm()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const onEdit = handleSubmit(async (values) => {
    await userStore.updateUser(userId, values as UserPayload)
})

onMounted(async () => {
    await userStore.getUser(userId)
    setValues(userModifying.value as UserPayload)
})
</script>