import { defineStore } from "pinia";
import { computed, ref } from "vue";

export type LoginPayload = {
    email: string
    password: string
}

function fakeLoginRequest(payload: LoginPayload): Promise<{ token: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                token: 'faketoken'
            })
        }, 100)
    })
}

const KEY_TOKEN = 'vuejs'

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(localStorage.getItem(KEY_TOKEN)) // state

    const isConnected = computed(() => !!token.value) // getter

    async function login(payload: LoginPayload) { // action
        const res = await fakeLoginRequest(payload)
        token.value = res.token // mutation
        localStorage.setItem(KEY_TOKEN, token.value)
    }

    return {
        token,
        login,
        isConnected
    }
})