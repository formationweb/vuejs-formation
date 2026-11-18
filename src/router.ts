import { createRouter, createWebHistory } from "vue-router";
import Users from "./components/Users.vue";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";
import { useAuthStore } from "./stores/auth.ts";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            meta: {
               requiredAuth: true
            },
            name: 'home'
        },
        {
            path: '/login',
            component: Login,
            name: 'loginId'
        }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const isConnected = authStore.isConnected

    if (!isConnected && to.meta.requiredAuth) {
        next({ name: 'loginId'})
        return
    }

    next()
})