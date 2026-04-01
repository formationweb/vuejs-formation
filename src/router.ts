import { createRouter, createWebHistory } from "vue-router";
import Users from "./components/Users.vue";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";
import { useAuthStore } from "./store/auth";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            meta: {
                requiredAuth: true
            }
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (!authStore.isConnected && to.meta.requiredAuth) {
        next('/login')
        return
    }
    next()
})