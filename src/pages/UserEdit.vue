<template>
    <h1>{{ userModifying?.name }}</h1>

    <form>
        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <button>Modifier utilisateur</button>
    </form>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserStore, type UserPayload } from '../store/user';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { onMounted } from 'vue';

const { params } = useRoute()
const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)
const { handleSubmit, defineField, setValues } = useForm()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const userId = +params.id

onMounted(async () =>{
    await userStore.getUser(userId)
    setValues(userModifying.value as UserPayload)
})
</script>