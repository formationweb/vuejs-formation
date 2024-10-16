<template>
    <div>
        <h1>{{ userModifying.name }}</h1>
        <form @submit.prevent="onEdit">
            <label>Email</label>
            <input type="text" v-model="email" v-bind="emailAttrs">
           
            <label>Nom</label>
            <input type="text" v-model="name" v-bind="nameAttrs">

            <button>
               Modifier utilisateur
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useUserStore, type UserPayload } from '../store/user';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useForm } from 'vee-validate';

const route = useRoute()
const userId = +route.params.id

const userStore = useUserStore()
const { userModifying } = storeToRefs(userStore)

const { handleSubmit, defineField, setValues } = useForm()

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

onMounted(async () => {
 await userStore.get(userId)
 setValues(userStore.userModifying)
})

const onEdit = handleSubmit(async (values) => {
    await userStore.update(userId, values as UserPayload)
})
</script>
