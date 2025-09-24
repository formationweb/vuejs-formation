<template>
    <h1>Utilisateurs</h1>
    <!-- <Opacity color="black" :opacity="1" @change="console.log" /> -->
     <!-- <Draw /> -->

     <form @submit.prevent="createUser">
        <label>Email</label>
        <input type="text" v-model="email" v-bind="emailAttrs">

        <div v-show="errors.email && isSubmitting">
            {{ errors.email }}
        </div>

        <label>Nom</label>
        <input type="password" v-model="name" v-bind="nameAttrs">

        <div v-show="errors.password && isSubmitting">
            {{ errors.password }}
        </div>

        <button :aria-busy="loadingCreate" :disabled="loadingCreate">Créer utilisateur</button>
    </form>

    <Loader :loading>
        <select v-model="extSelected">
            <option value="">Tous</option>
            <option v-for="ext in extensions" :key="ext">
                {{ ext }}
            </option>
        </select>
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @onDelete="deleteUser">
            <template #title>
                <h1>test</h1>
            </template>
            <template #default>
                <p>Contenu</p>
            </template>
            <template #footer="{ name, active }">
                <p :class="{ red: !active, green: active }">L'utilisateur {{ name }} est {{ active  }}</p> 
                <!-- <p :style="{ color: 'red', fontWeight: 'bold' }">test</p> -->
            </template>
        </UserCard>
    </Loader>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { User } from '../interfaces/User';
import UserCard from './UserCard.vue';
import Loader from '../atomics/Loader.vue';
import Opacity from '../atomics/Opacity.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter';
import Draw from './Draw.vue';
import { useFetchUsers } from '../composables/useFetchUsers';
import axios from 'axios';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const { getAll, loading } = useFetchUsers()
const { extSelected, extensions, usersFiltered, } = useExtensionFilter(users)

async function deleteUser(id: number) {
    await axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
    users.value = users.value.filter(user => user.id != id)
}

const isSubmitting = ref(false)
const loadingCreate = ref(false)

const { handleSubmit, defineField, errors, resetForm } = useForm({
    validationSchema: object({
        email: string()
            .required('Email obligatoire'),
        name: string().required()
    })
})

const createUser = handleSubmit(async (values) => {
    loadingCreate.value = true
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', values)
    users.value = [...users.value, res.data]
    loadingCreate.value = false
    resetForm()

}, () => {
    isSubmitting.value = true
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

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