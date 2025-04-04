import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "../interfaces/User";
import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/users'

export type UserPayload = { email: string, name: string }

export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([])
    const userModifying = ref<User | null>(null)
    const names = computed(() => users.value.map(user => user.name))

    async function getAll() {
        const res = await axios.get(URL)
        users.value = res.data
    }

    async function createUser(payload: UserPayload) {
        const res = await axios.post(URL, payload)
        const userCreated = res.data
        users.value.push(userCreated)
    }

    async function deleteUser(userId: number) {
        await axios.delete(URL + '/' + userId)
        users.value = users.value.filter(user => user.id != userId)
    }

    async function getUser(userId: number) {
        const res = await axios.get(URL + '/' + userId)
        userModifying.value = res.data
    }

    async function updateUser(userId: number, data: UserPayload) {
        const res = await axios.put(URL + '/' + userId, data)
        userModifying.value = res.data
    }

    return {
        userModifying,
        users, 
        getAll,
        createUser,
        deleteUser,
        getUser,
        updateUser,
        names
    }
})