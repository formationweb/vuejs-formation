import { createRouter, createWebHistory } from "vue-router";
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
    const auth = useAuthStore()
    if (to.meta.requiredAuth && !auth.isConnected) {
        next({
            name: 'loginId'
        })
        return
    }
    next()
})
