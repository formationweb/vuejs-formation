<template>
    <h1>{{ userModifying.name }}</h1>

    <form @submit.prevent="edit">
        <label>Email</label>
        <input type="text" v-model="form.email">

        <label>Nom</label>
        <input type="text" v-model="form.name">

        <button>Modifier</button>
    </form>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserManage } from '../composables/useUserManage';
import { useUserStore } from '../stores/user';
import { storeToRefs } from 'pinia';
import { reactive, watchEffect } from 'vue';

const { params } = useRoute()
const userManage = useUserManage()
const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)
const userId = params.id !== undefined ? +params.id : null

if (userId) userManage.getUser(userId)

const form = reactive({
    email: '',
    name: ''
})

watchEffect(() => {
    form.email = userModifying.value.email
    form.name = userModifying.value.name
})

function edit() {
    console.log({ ...form })
}
</script>