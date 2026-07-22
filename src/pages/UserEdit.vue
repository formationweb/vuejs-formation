<template>
    <h1>{{ userModifying?.name }}</h1>

    <form @submit.prevent="submitEditUser">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <label>Nom</label>
        <input type="text" v-model="name" v-bind="nameAttrs">

        <button>Modifier utilisateur</button>
    </form>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';
import { useUserManage } from '../composables/useUserManage';
import { useForm } from 'vee-validate';
import { watchEffect } from 'vue';
import type { UserUpdatePayload } from '../core/services/user';

const route = useRoute()
const userStore = useUserStore()
const userManage = useUserManage()
const { userModifying } = storeToRefs(userStore)
const { handleSubmit, defineField, setValues } = useForm()


const paramsId = route.params.id
const id = paramsId ? +paramsId : undefined

// async function init() {
//     if (id) {
//         await userManage.getUser(id)
//         setValues(userModifying.value ?? {})
//     }
// }

// init()

if (id) userManage.getUser(id)

watchEffect(() => {
    setValues(userModifying.value ?? {})
})

const submitEditUser = handleSubmit(async (values) => {
    if (id) userManage.updateUser(id, values as UserUpdatePayload)
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

</script>