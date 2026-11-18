import { createRouter, createWebHistory } from "vue-router";
import Users from "./components/Users.vue";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";
import { useAuthStore } from "./stores/auth.ts";
import UserEdit from "./pages/UserEdit.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            meta: {
               requiredAuth: true
            },
            children: [
                {
                    path: '',
                    component: Users,
                    name: 'home'
                },
                {
                    path: 'user/:id',
                    component: UserEdit,
                    name: 'userEdit'
                }
            ]
        },
        {
            path: '/login',
            component: Login,
            name: 'loginId'
        }
    ]
})

router.beforeEach((to, from) => {
    const authStore = useAuthStore()
    const isConnected = authStore.isConnected

    if (!isConnected && to.meta.requiredAuth) {
        return { name: 'loginId'}
    }
})