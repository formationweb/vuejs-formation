<template>
    <h1>{{ userWord }}</h1>
    <Opacity :opacity="0.3" color="black" @change="console.log" />
    <Loader :loading> <!-- alias de :loading="loading" -->
        <select v-model="extSelected">
            <option value="">Tous</option>
            <option v-for="ext in extensions" :key="ext">{{ ext }}</option>
        </select>
        <div>
            <input type="number" v-model="indexUser">
            <p v-if="errorMessage">{{ errorMessage }}</p>
            <button @click="scrollToUser">Scroll To User</button>
        </div>
        <form @submit.prevent="createUser">
            <label>Email</label>
            <input type="text" v-model="email" v-bind="emailAttrs">
            <div>{{  errors.email  }}</div>
           
            <label>Nom</label>
            <input type="text" v-model="name" v-bind="nameAttrs">
            <div>{{  errors.name  }}</div>

            <button :aria-busy="loadingCreate" :disabled="loadingCreate">
               {{ loadingCreate ? '' : ' Créer utilisateur' }}
            </button>
        </form>
        <div v-for="(u, index) in usersFiltered" ref="userItems">
            <UserCard :user="u" :key="u.id" @on-delete="userStore.delete">
                <template #title>
                    <h1>Titre</h1>
                </template>
                <template #default>
                    Contenu par défaut
                </template>
                <template #footer="{ name, active }">
                    <p>L'utilisateur est {{ name }} est 
                        <span :style="{ color: active ? 'green' : 'red', fontWeight: 'bold' }">{{ active }}</span></p>
                </template>
            </UserCard>
        </div>
    </Loader>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, reactive, ref, useTemplateRef, type ShallowRef } from 'vue';
import type { User } from '../interfaces/User';
import UserCard from './UserCard.vue';
import Loader from '../atomics/Loader.vue';
import Opacity from '../atomics/Opacity.vue';
import { useExtensionFilter } from '../composables/useExtensionFilter';
import { useFetchUsers } from '../composables/useFetchUsers';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { storeToRefs } from 'pinia';
import { useUserStore, type UserPayload } from '../store/user';

const userStore = useUserStore()

const extensions: string[] = ['tv', 'biz', 'io', 'me']
const indexUser = ref(0)
//const elCards = reactive<HTMLElement[]>([])
const elCards = useTemplateRef<HTMLElement[]>('userItems')
const errorMessage = ref('')

const { users } = storeToRefs(userStore)

const isUsersEmpty = computed(() => users.value.length == 0)
const userWord = computed(() => 'Utilisateur' + (isUsersEmpty.value ? '' : 's'))

function scrollToUser() {
    const el = elCards.value?.[indexUser.value]
    if (!el) {
        errorMessage.value = 'Index non valide'
        return
    }
    errorMessage.value = ''
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

onMounted(async () => {
    await getAll()
})

const loadingCreate = ref(false)

const { handleSubmit, defineField, errors } = useForm({
    validationSchema: object({
        name: string().required(),
        email: string().required()
    })
})

const createUser = handleSubmit(async (values) => {
    loadingCreate.value = true
    const userCreated = await userStore.create(values as UserPayload)
    loadingCreate.value = false
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')

const { extSelected, usersFiltered } = useExtensionFilter(users)
const { loading, getAll } = useFetchUsers()
</script>