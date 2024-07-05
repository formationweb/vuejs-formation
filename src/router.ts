import { createRouter, createWebHistory } from "vue-router";
import Default from './layouts/Default.vue';
import Login from './pages/Login.vue';
import UserEdit from './pages/UserEdit.vue';
import Users from "./pages/Users.vue";
import { useAuthStore } from "./store/auth";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Default,
            meta: {
                requiredAuth: true
            },
            children: [
                {
                    path: '',
                    name: 'root',
                    component: Users
                },
                {
                    path: 'user/:id',
                    name: 'user-edit',
                    component: UserEdit
                }
            ]
        },
        {
            path: '/login',
            name: 'loginId',
            component: Login
        }
    ]
})

router.beforeEach((to, _, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiredAuth && !authStore.isAuth) {
        // next({
        //     name: 'loginId'
        // })
        next()
        return
    }
    next()
})
