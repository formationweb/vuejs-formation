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

        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u">
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
import Loading  from '@/components/Loading.vue'

const { users, getAll, loading } = useFetchUsers()
const nbSelected = ref(0)
const { usersFiltered, extSelected } = useExtensionFilter(users)

const word = 'Utilisateur'
const wordPlural = computed(() => word + (nbSelected.value > 1 ? 's' : ''))

const extensions: string[] = ['tv', 'biz', 'io', 'me'];

onMounted(() => {
    getAll()
})
</script>