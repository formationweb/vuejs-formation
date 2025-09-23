<template>
    <h1>Utilisateurs</h1>
    <!-- <Opacity color="black" :opacity="1" @change="console.log" /> -->
     <Draw />
    <Loader :loading="false">
        <select v-model="extSelected">
            <option value="">Tous</option>
            <option v-for="ext in extensions" :key="ext">
                {{ ext }}
            </option>
        </select>
        <UserCard v-for="u in usersFiltered" :key="u.id" :user="u">
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
import axios from 'axios';

let users = ref<User[]>([])

async function getAll() {
     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
     users.value = res.data
}

getAll()

const { extSelected, extensions, usersFiltered, } = useExtensionFilter(users)
</script>

<style scoped>
.red {
    color: red;
}

.green {
    color: green;
}
</style>