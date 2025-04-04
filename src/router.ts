import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Main from "./layouts/Main.vue";
import Users from "./components/Users.vue";
import UserEdit from "./pages/UserEdit.vue";
import { useAuthStore } from "./store/auth";
import { useFetchUsers } from "./composables/useFetchUsers";

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

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiredAuth && !authStore.hasToken) {
        next({
            name: 'loginId'
        })
        return
    }
    next()
})