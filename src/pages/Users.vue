<template>
    <Loading :loading> <!-- revient à faire :loading="loading" -->
        <h1>{{ wordPlural }}</h1>

        <select v-model="nbSelected">
            <option>0</option>
            <option>1</option>
            <option>2</option>
        </select>

        <select v-model="extSelected">
            <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
        </select>

        <form @submit.prevent="createUser">
            <label>Nom</label>
            <input type="text" v-model="name" v-bind="nameAttrs">
            <div>{{ errors.name }}</div>

            <label>Email</label>
            <input type="text" v-model="email" v-bind="emailAttrs">
            <div>{{ errors.email }}</div>

            <button :aria-busy="loadingCreate" :disabled="loadingCreate">
                {{ loadingCreate ? '' : 'Créer utilisateur' }}
            </button>
        </form>

        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u" @on-delete="deleteUser">
            <template #title>
                <h1>Titre</h1>
            </template>
            <template #subtitle>
                <h2>Sous titre</h2>
            </template>
            <!-- <template #default>
        <h3>Contenu par défaut</h3>
    </template> -->
            <template #footer="slotProps">
                <p>L'Utilisateur {{ slotProps.name }} est {{ slotProps.active }}</p>
            </template>
        </UserCard>
    </Loading>

</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import UserCard from '@/components/UserCard.vue'
import { useExtensionFilter } from '../composable/useExtensionFilter';
import { useFetchUsers } from '../composable/useFetchUsers';
import Loading from '@/components/Loading.vue'
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { UserPayload, useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';

const nbSelected = ref(0)
const loadingCreate = ref(false)

const { getAll, loading } = useFetchUsers()
const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const { usersFiltered, extSelected } = useExtensionFilter(users)
const { handleSubmit, defineField, errors } = useForm({
    validationSchema: object({
        email: string().email().required(),
        name: string().required()
    })
})


const word = 'Utilisateur'
const wordPlural = computed(() => word + (nbSelected.value > 1 ? 's' : ''))

const extensions: string[] = ['tv', 'biz', 'io', 'me'];


const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const createUser = handleSubmit(async (values, { resetForm }) => {
    loadingCreate.value = true
    await userStore.create(values as UserPayload)
    loadingCreate.value = false
    resetForm()
})

async function deleteUser(id: number) {
    await userStore.delete(id)
}

// onMounted(() => {
//     getAll()
// })
</script>