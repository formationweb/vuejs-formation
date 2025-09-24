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
            name: 'home',
            meta: {
                requiredAuth: true
            }
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
    if (to.meta.requiredAuth && !authStore.hasConnected) {
        next({
            name: 'loginId'
        })
        return
    }
    next()
})